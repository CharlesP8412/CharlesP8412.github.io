import React from 'react'

const ProjectDetails = ({ currentIndex, views }) => {
  const project = views[currentIndex]

  const features = project && project.features.map(feat => {
    return <li>{feat}</li >
  })
  const stack = project && project.stack.map(tech => {
    return <li>{tech}</li >
  })

  return (
    <article className="projectDisplay">
      <section className="projectImages" >
        <img src={project.source} alt="" />
        <span>
          <img src={project.thumbnail} alt="" />
          <img src={project.thumbnail} alt="" />
        </span>
      </section>
      <section className="projectDetails">

        <h1><u>{project.caption}</u></h1>
        <h4>{project.description}</h4>
        <hr />
        <table>
          <tr>
            <th><h4>Built With:</h4></th>
            <th><h4>Features:</h4></th>
          </tr>
          <tr>
            <td>
              <ul>
                {stack}
              </ul>
            </td>
            <td>
              <ul>
                {features}
              </ul>
            </td>
          </tr>
        </table>

        {/* <p>
          LONG DESCRIPTION sdflk;jdfkljas;dflk lkdsfjadsfkl;jdlsfkja
          sdlfkjasdf;lk sdflkja sdflkja sdflksd dslkdsf
          sdlfkjasdf;lk sdflkja sdflkja sdflksd dslkdsf
          asdflkfjd
        </p> */}


      </section>
    </article>
  )

}

export default ProjectDetails
