interface SourceInfoProps {
  source: string
}

export function SourceInfo({ source }: SourceInfoProps) {
  return (
    <p className="text-sm text-muted-foreground inline-flex items-center gap-1.5 mt-4 px-2">
      <img src="/assets/icon.svg" alt="Source icon" className="h-3.5 w-3.5 opacity-60" />
      Source: {source}
    </p>
  )
}
