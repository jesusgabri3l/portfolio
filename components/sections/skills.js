import Image from 'next/image';
import react from '../../public/react-js.svg';
import vue from '../../public/vue-js.svg';
import svelte from '../../public/svelte.svg';
import node from '../../public/node-js.svg';
import express from '../../public/expressjs.svg';
import typescript from '../../public/typescript.svg';
export default function Skills() {
    return (
        <section className="skills shadow-xl columns-3">
              <article className="skill">
                <h3 className="title is-blue font-bold text-center text-2xl">Frontend development</h3>
                <p className="subtitle is-black mt-5 text-center leading-7">Like to write my CSS, JS code readable and love building awesome user interfaces from scratch</p>
                <div className="flex justify-between items-center mt-5">
                  <Image src={vue} alt="illustration" width="50"/>
                  <Image src={react} alt="illustration" width="50"/>
                  <Image src={svelte} alt="illustration" width="50"/>
                </div>
                <p className="text-green-600 mt-5 text-center subtitle ">Techs and tools i have experience with</p>
                <ul className="mt-5">
                  <li className="subtitle text-center">Typescript</li>
                  <li className="subtitle text-center mt-2">ESLint</li>
                  <li className="subtitle text-center mt-2">Responsive design</li>
                  <li className="subtitle text-center mt-2">SCSS</li>
                  <li className="subtitle text-center mt-2">BEM Methodology</li>
                  <li className="subtitle text-center mt-2">Bulma</li>
                  <li className="subtitle text-center mt-2">Tailwind</li>
                  <li className="subtitle text-center mt-2">Bootstrap</li>
                  <li className="subtitle text-center mt-2">Figma</li>
                </ul>
              </article>

              <article className="skill">
                <h3 className="title is-blue font-bold text-center text-2xl">Backend development</h3>
                <p className="subtitle is-black mt-5 text-center leading-7">I wanted to be a Javascript fullstack developer, so i started learning backend techs. I have to say that i like it</p>
                <div className="flex justify-between items-center mt-5">
                  <Image src={node} alt="illustration" width="50"/>
                  <Image src={express} alt="illustration" width="50" height="60"/>
                  <Image src={typescript} alt="illustration" width="50"/>
                </div>
                <p className="text-green-600 mt-5 text-center subtitle ">I have experience working with</p>
                <ul className="mt-5">
                <li className="subtitle text-center mt-2">REST API Building</li>
                <li className="subtitle text-center mt-2">PostgreSQL</li>
                <li className="subtitle text-center mt-2">Authentication</li>
                  <li className="subtitle text-center mt-2">Middleware</li>
                </ul>
              </article>
              <article className="skill">
                <h3 className="title is-blue font-bold text-center text-2xl">Complements</h3>
                <p className="subtitle is-black mt-5 text-center leading-7">These are technologies that i have tried out, so my knowledges are basic about them, but i'm able to get in deep if need it.</p>
                <p className="text-green-600 mt-5 text-center subtitle ">Complements</p>
                <ul className="mt-5">
                <li className="subtitle text-center mt-2">Docker</li>
                <li className="subtitle text-center mt-2">Pipelines - CI</li>
                <li className="subtitle text-center mt-2">Firebase</li>
                  <li className="subtitle text-center mt-2">Azure services</li>
                  <li className="subtitle text-center mt-2">GraphQL</li>
                  <li className="subtitle text-center mt-2">Ionic</li>
                  <li className="subtitle text-center mt-2">Flutter</li>
                  <li className="subtitle text-center mt-2">React Native</li>

                </ul>
              </article>
            </section>
    )
}