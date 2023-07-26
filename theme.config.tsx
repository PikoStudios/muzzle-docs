import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'

const PikostudiosImageURL: string = "https://avatars.githubusercontent.com/u/74280900?s=400&u=a182cab2d5e0da462f025734a1037a73aa17ca00&v=4";

const config: DocsThemeConfig = {
  logo: <span>Muzzle</span>,
  project: {
    link: 'https://github.com/pikostudios/muzzle',
  },
  chat: {
    link: 'https://discord.gg/Rw2FdYw5dK',
  },
  docsRepositoryBase: 'https://github.com/pikostudios/muzzle-docs',
  footer: {
    text: <Image
          src={PikostudiosImageURL}
          alt="PikoStudios"
          width={980}
          height={980}>© PikoStudios 2023-present</Image>
  },
}

export default config
