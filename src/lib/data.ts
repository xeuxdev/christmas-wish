export const predefinedTemplates = [
  {
    message:
      "In the season of giving, you've given me the most beautiful gift - your heart. Wishing you a Christmas as amazing as the love you've brought into my life.",
    recipient: "",
    color: "red",
    fontSize: 32,
    fontWeight: "bold",
    musicPath: "bells",
    template: 1,
    bgOpacity: 70,
  },

  {
    message:
      "May the magic of Christmas fill your heart with the same warmth and happiness your friendship brings to mine. Wishing you a holiday season as wonderful as you are.",
    recipient: "",
    color: "white",
    fontSize: 28,
    fontWeight: "medium",
    musicPath: "carol-of-the-bells",
    template: 2,
    bgOpacity: 70,
  },

  {
    message:
      "In the tapestry of life, family is the most beautiful thread. May this Christmas be a reflection of the love and togetherness that make our family so special. Merry Christmas, dear family",
    recipient: "",
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    musicPath: "jingle-bells",
    template: 3,
    bgOpacity: 70,
  },

  {
    message:
      "To a colleague who makes work feel like a second home, may your Christmas be as bright and cheerful as your presence in the office. Merry Christmas and a prosperous New Year!.",
    recipient: "",
    color: "white",
    fontSize: 24,
    fontWeight: "semibold",
    musicPath: "we-wish-you-a-merry-christmas",
    template: 4,
    bgOpacity: 70,
  },
] satisfies {
  message: string
  recipient: string
  color: string
  fontSize: number
  fontWeight: "normal" | "medium" | "semibold" | "bold"
  musicPath: string
  template: number
  bgOpacity: number
}[]

// const categories = ["Friend", "Lover", "Co-worker", "Family"]
//
