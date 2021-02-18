import React from 'react'

const ProjectDetails = ({ currentIndex, views }) => {
  console.log("CAP", currentIndex)

  const project = views[currentIndex]
  console.log("sel Proj", project)

  return (
    <article className="projectDisplay">
      <section className="projectImages" >
        <img src={project.source} alt="" />
        <img src={project.source} alt="" />
      </section>
      <section className="projectDetails">
        <h1>{project.caption}</h1>
        <h4>{project.description}</h4>
        <hr />


        <table>
          <tr>
            <th>Stack</th>
            <th>Features</th>
          </tr>
          <tr>
            <td>
              <ul>
                <li>Node</li>
                <li>React</li>
                <li>Stuff...</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>bcrypt</li>
                <li>user auth</li>
                <li>Stuff...</li>

              </ul>
            </td>
          </tr>
        </table>



      </section>
    </article>
  )

}

export default ProjectDetails
