import { NextStudio } from 'next-sanity/studio'
import { defineConfig } from 'sanity'
import config from '../../sanity.config'

const studioConfig = defineConfig(config)

export default function StudioPage() {
    return <NextStudio config={studioConfig} />
}