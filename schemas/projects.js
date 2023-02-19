import { defineType, defineField } from "sanity";

export const projects = defineType({
  name: "projects",
  type: "document",
  title: "Projects",
  fields: [
    defineField({
      name: "projectName",
      type: "string",
      title: "Project Name",
    }),
	
    defineField({
      name: "images",
      title:"Images",
      type: "array",
      of: [
        {
        type:"accessImage"
        },
      ],
    }),
	
    defineField({
      name: "videos",
      title:"Videos",
      type: "array",
      of: [{type:'file'}],
    }),

    defineField({
      name: "skills",
      type: "string",
      title: "Skills",
    }),
    defineField({
      name: "description",
      type: "string",
      title: "Description",
    }),

    defineField({
      name: "github",
      type: "string",
      title: "Github",
    }),

    defineField({
      name: "weblink",
      type: "string",
      title: "Weblink",
    }),

    defineField({
      name: "technologies",
      title:"Technologies",
      type: 'array', 
      of: [{type: 'reference' , to:[{type:'technologies'}]}]
    })
  ]
})