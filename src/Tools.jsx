import { useFetchTools } from './Helper'

const Tools = () => {
  const { loading, tools } = useFetchTools()
  if (loading) {
    return (
      <section className="projects">
        <h2>Loading...</h2>
      </section>
    )
  }
  return (
    <section className="projects">
      <div className="title">
        <h2>Tools</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {tools.map((tool) => {
          const { id, toolTitle, img, toolUrl } = tool
          return (
            <a
              key={id}
              href={toolUrl}
              target="_blank"
              rel="noreferrer"
              className="project"
            >
              <img src={img} alt={toolTitle} className="img" />
              <h5>{toolTitle}</h5>
            </a>
          )
        })}
      </div>
    </section>
  )
}
export default Tools
