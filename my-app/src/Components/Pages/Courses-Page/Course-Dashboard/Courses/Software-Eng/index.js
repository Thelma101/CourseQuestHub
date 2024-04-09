import { DynamicCourses } from "..";

export const SoftwareEng = () =>{
    return(
        <div>
            <DynamicCourses embed={<iframe width="560" height="315" src="https://www.youtube.com/embed/j1fc0FlCjyI?si=W1wNWuymNPTLvYB2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}  h3={"Software Engineer"} p={"Software engineers design and develop computer games, business applications, operating systems, network control systems, and middleware—to name just a few of the many career paths available. A career as a software engineer can be both fun and challenging with opportunities to work in almost any industry, including large and small businesses, government agencies, nonprofit organizations, healthcare facilities, and more. And as technology continues to evolve, the need for software developers continues to grow. Many companies are also shifting towards hiring software engineers who work from home, allowing for increased flexibility and more opportunities to enter the field."}/>
        </div>
    )
}