import Image from 'next/image';
import projects from '../data/recentworkData';

export default function RecentWork() {
    return (
        <section className="xl:px-32 px-7 py-20 flex items-center flex-col">
          <h2 className="text-3xl font-bold text-center title is-blue">Recent work</h2>
          <p className="subtitle text-center mt-5 tracking-wide leading-7">As i like to code, here you can find some projects and challenges i have worked on. <br />i built all these projects as a hobbie, so it was just for fun.</p>
          <div className="projects mt-12">
              {
                  projects.map( (project) => {
                      return(
                        <div className="project" key={project.id}>
                        <Image className="project__img" src={project.img} alt={project.name}/>
                        <div className="project__info">
                          <h3 className="project__info__title title is-blue font-bold text-lg">{project.name}</h3>
                          <div className="project__info__links">
                            {project.website && <a className="project__info__link" rel="noreferrer" href={project.website} target="_blank">Website</a>}
                            <a className="project__info__link" href={project.code} rel="noreferrer" target="_blank">Code</a>
                            {project.backend && <a className="project__info__link" href={project.backend} target="_blank" rel="noreferrer">Backend code</a>}
                          </div>
                          <div className="project__info__tags">
                            {project.tags.map((tag) => <span className="project__info__tag" key={tag}>{tag}</span>)}
                          </div>
                        </div>
                      </div>
                      )
                  })
              }
          </div>
        </section>
    )
}