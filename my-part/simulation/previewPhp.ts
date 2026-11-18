

export function previewPhp(source: string) : string | null {
    const match = source.match(
        /^\s*<\?php\s+echo\s+(?:"([^"\r\n]*)"|'([^'\r\n]*)')\s*;\s*\?>\s*$/,
    );

    if (!match) return null;

    return match[1] ?? match[2];
}