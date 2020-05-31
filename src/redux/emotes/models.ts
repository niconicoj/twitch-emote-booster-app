type Error = {
  message: string
}

export type Emote = {
  code: string,
  count: Number,
  url: string
}

export type Fetch = {
  fetching: boolean,
  error?: Error
}
