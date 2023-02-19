import { defineType } from "sanity";

export const accessImage = defineType({
    name: 'accessImage',
    title:'AccessImage',
    type: 'image',
    options: {
      hotspot: true 
    }   
  })