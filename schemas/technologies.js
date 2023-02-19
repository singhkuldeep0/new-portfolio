import {defineField, defineType} from 'sanity'

export const Technologies = defineType({
  name: 'technologies',
  title: 'Technologies',
  type: 'document',
  fields: [
    defineField({
        name: 'icon',
        title:'Icon',
        type: 'image',
        options: {
          hotspot: true 
        }   
    }),
    defineField({
      name: 'iconName',
      title: 'IconName',
      type: 'string',
    }),
  ]
  
})
