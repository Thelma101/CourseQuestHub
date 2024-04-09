import { DynamicCourses } from "..";

export const Teaching = () =>{
    return(
        <div>
            <DynamicCourses embed={<iframe width="560" height="315" src="https://www.youtube.com/embed/VnFST4p3mas?si=JASU0C3YqxUUIQNb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}  h3={"Teaching"} p={"A teacher has been defined as “an expert who is capable of imparting knowledge that will help learners to build, identify and to acquire skills that will be used to face the challenges in life. The teacher also provides to the learners knowledge, skills and values that enhance development. Thus, A teacher is a person who provides education for pupils and students."}/>
        </div>
    )
}