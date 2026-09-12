/** Parser mínimo de frontmatter YAML para conteúdo editorial (build-time). */

const stripQuotes = (value: string): string =>
  value.replace(/^['"]|['"]$/g, '')

const parseScalar = (value: string): string | number | boolean => {
  const unquoted = stripQuotes(value)
  if (unquoted === 'true') return true
  if (unquoted === 'false') return false
  if (/^\d+$/.test(unquoted)) return Number(unquoted)
  return unquoted
}

const parseSimpleYaml = (yaml: string): Record<string, unknown> => {
  const result: Record<string, unknown> = {}
  let listKey: string | null = null
  let listItems: string[] = []

  const flushList = () => {
    if (listKey && listItems.length > 0) {
      result[listKey] = listItems
    }
    listKey = null
    listItems = []
  }

  for (const line of yaml.split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed) continue

    const listItem = line.match(/^\s+-\s+(.+)$/)
    if (listItem && listKey) {
      listItems.push(stripQuotes(listItem[1].trim()))
      continue
    }

    flushList()

    const keyValue = trimmed.match(/^([^:]+):\s*(.*)$/)
    if (!keyValue) continue

    const key = keyValue[1].trim()
    const rawValue = keyValue[2].trim()

    if (rawValue === '') {
      listKey = key
      continue
    }

    result[key] = parseScalar(rawValue)
  }

  flushList()
  return result
}

export const parseMarkdownDocument = <T extends Record<string, unknown>>(
  raw: string,
  slug: string,
) => {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)

  if (!match) {
    return {
      slug,
      frontmatter: {} as T,
      body: raw.trim(),
    }
  }

  return {
    slug,
    frontmatter: parseSimpleYaml(match[1]) as T,
    body: match[2].trim(),
  }
}
