import { PrismicRichText, useAllPrismicDocumentsByType } from "@prismicio/react"

const Home = () => {
  const [documents] = useAllPrismicDocumentsByType("post")
  console.log(documents)
  if (documents) {
    return (
      <>
        {documents.map((document) => {
          console.log(document)
          return (
            <article key={document.data.id}>
              <img
                src={document.data.postImage.url}
                alt={document.data.postImage.alt}
              />
              <PrismicRichText field={document.data.postTitle} />
              <PrismicRichText field={document.data.postContent} />
            </article>
          )
        })}
      </>
    )
  } else {
    return <p>loading ...</p>
  }
}

export default Home
