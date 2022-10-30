import { Embed, Webhook } from './src'

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
