<div align="center">
  <h1>Discord Webhook - TypeScript/JavaScript supported library</h1>
  
  <p>
        <a href="https://packagist.org/packages/vermaysha/discord-webhook">
            <img src="https://img.shields.io/npm/v/@vermaysha/discord-webhook.svg?style=flat-square" alt="Latest Version on Packagist">
        </a>
        <a href="https://github.com/vermaysha/discord-webhook/actions/workflows/build.yml">
            <img src="https://img.shields.io/github/actions/workflow/status/vermaysha/discord-webhook/build.yml?branch=master&amp;label=build&amp;style=flat-square" alt="GitHub Build Action Status">
        </a>
        <a href="https://www.npmjs.com/package/@vermaysha/discord-webhook">
            <img src="https://img.shields.io/npm/dt/@vermaysha/discord-webhook.svg?style=flat-square" alt="Total Downloads">
        </a>
        <a href="LICENSE.md">
            <img src="https://img.shields.io/github/license/vermaysha/discord-webhook?style=flat-square" alt="LICENSE">
        </a>
        <a href="https://github.com/vermaysha/discord-webhook/releases/latest">
            <img src="https://img.shields.io/github/release-date/vermaysha/discord-webhook?style=flat-square" alt="GitHub Release Date - Published_At">
        </a>
    </p>
  
</div>

Discord Webhook API Wrapper built using TypeScript which makes it easy to send webhooks.

## Install

For NPM <br>
`npm install @vermaysha/discord-webhook`

For Yarn <br>
`yarn install @vermaysha/discord-webhook`

# Example

## Basic Use

```ts
import { Webhook } from '@vermaysha/discord-webhook'

const hook = new Webhook('YOUR VALID DISCORD WEBHOOK')

hook
  .setUsername('Vermaysha')
  .setContent('Lorem ipsum dolor sit amet, consectetur adipiscing elit. ')

hook.send()
```

## Custom Embeds (Rich Message)

```ts
import { Embed, Webhook } from '@vermaysha/discord-webhook'

const hook = new Webhook('YOUR VALID DISCORD WEBHOOK')

const embed = new Embed()
embed
  .setTitle('Genshin Impact Daily Check-In')
  .setDescription('OK')
  .setColor('#e86d82')
  .setThumbnail({
    url: 'https://upload-static.hoyoverse.com/event/2021/02/25/f4450e0ef470f777fca0b3dd95813734_1653002626503274756.png',
  })
  .setAuthor({
    name: 'Paimon',
    icon_url:
      'https://img-os-static.hoyolab.com/communityWeb/upload/1d7dd8f33c5ccdfdeac86e1e86ddd652.png',
    url: 'https://genshin.hoyoverse.com',
  })
  .setFooter({
    text: 'Genshin Impact Automatic Checkin',
    icon_url:
      'https://img-os-static.hoyolab.com/communityWeb/upload/1d7dd8f33c5ccdfdeac86e1e86ddd652.png',
  })
  .setTimestamp()
  .addField({
    name: 'Nickname',
    value: 'FrozenNight',
    inline: true,
  })
  .addField({
    name: 'UID',
    value: '828080902',
    inline: true,
  })
  .addField({
    name: 'Level',
    value: '59',
    inline: true,
  })
  .addField({
    name: 'Server',
    value: 'Asia',
    inline: true,
  })
  .addField({
    name: "Today's rewards",
    value: `Primogem x 20`,
    inline: true,
  })
  .addField({
    name: 'Total Daily Check-In',
    value: '30',
    inline: true,
  })
  .addField({
    name: 'Check-in result:',
    value: 'OK',
    inline: false,
  })

hook.addEmbed(embed).send()
```

# LICENSE

@vermaysha/discord-webhook
Copyright (C) 2022 Ashary Vermaysha

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA
Also add information on how to contact you by electronic and paper mail.

You should also get your employer (if you work as a programmer) or your school, if any, to sign a "copyright disclaimer" for the library, if necessary. Here is a sample; alter the names:

Yoyodyne, Inc., hereby disclaims all copyright interest in
the library `Frob' (a library for tweaking knobs) written
by James Random Hacker.

signature of Ty Coon, 1 April 1990
Ty Coon, President of Vice
