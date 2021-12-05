// NOT: İsterseniz yeni bir istemci oluşturabilirsiniz. Oluşturduğunuz zaman tetiklenen Type/String "CMD(konsol)" günlüğüne kayıt edilebilir."
const { Client, Intents, MessageActionRow, MessageSelectMenu } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const {token , BotPrefix, OwnerID, r1 , r2 ,r3 ,r4,r5 , r1m , r2m , r3m , r4m , r5m} = require('./config.json')
client.on('ready', () => {

    console.log(`${client.user.tag} adlı bot başarıyla giriş yaptı!`);

});


client.on('messageCreate', async message => { 

    if (message.author.id != OwnerID) return;

    if (message.content === '!menukur') {
        const row = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId('menu1')
                .setPlaceholder('Merhaba, etkinlik rollerini hemen alabilirsin!')
                .addOptions([
                    { //seçenekleri kendi istediğin gibi düzenleyebilirsin. Emojiler "./config.json"da eğer daha fazla seçenek eklemek istersen emojileri de aynı şekilde oradan çoğaltabilirsin. Fazla seçenek ekledikten sonra 4. satıra tanımlamayı unutma. 
                        label: 'Doğruluk & Cesaret',
                        description: 'Buraya tıklayarak rolü alabilirsin.',
                        value: 'Doğruluk&Cesaret',
                        emoji: r1m
                    },
                    {
                        label: 'Vampir Köylü',
                        description: 'Buraya tıklayarak rolü alabilirsin.',
                        value: 'VampirKöylü',
                        emoji: r2m
                    },
                    {
                        label: 'Kırmızı Koltuk',
                        description: 'Buraya tıklayarak rolü alabilirsin.',
                        value: 'KırmızıKoltuk',
                        emoji: r3m
                    },
                    {
                        label: 'Konser/Canlı Müzik',
                        description: 'Buraya tıklayarak rolü alabilirsin.',
                        value: 'Konser/CanlıMüzik',
                        emoji: r4m
                    },
                    {
                        label: 'Çekiliş',
                        description: 'Buraya tıklayarak rolü alabilirsin.',
                        value: 'Çekiliş',
                        emoji: r5m
                    },
                ]),
        );
//içerik mesajını buradan düzenle ve unutma sohbette kalabalık olmasın diye geçici olarak gönderilir.
    await message.reply({  content: "Merhaba, etkinlik rollerini hemen alabilirsin!",  ephemeral: true ,components: [row]})
     
}

//Etkileşimin kurulucağı metinlere göre karşılığını doldurabilirsin.
client.on('interactionCreate', async interaction => {
  if(interaction.isSelectMenu()){
      
    let choice = interaction.values[0] 
    const member = interaction.member
     if(choice == 'Doğruluk&Cesaret'){
        if (member.roles.cache.some(role => role.id == r1)) {
            interaction.reply({content: "Rol başarıyla kaldırıldı" , ephemeral: true})
            member.roles.remove(r1)
        }
        else{
        member.roles.add(r1)
            await interaction.reply({ content: "Rol başarıyla eklendi!", ephemeral: true })}
          }

else if(choice == 'VampirKöylü'){
    if (member.roles.cache.some(role => role.id == r2)) {
        interaction.reply({content: "Rol başarıyla kaldırıldı", ephemeral: true})
        member.roles.remove(r2)
    }
    else{
    member.roles.add(r2)
        await interaction.reply({ content: "Rol başarıyla kaldırıldı", ephemeral: true })}
      }


      else if(choice == 'KırmızıKoltuk'){
        if (member.roles.cache.some(role => role.id == r3)) {
            interaction.reply({content: "Rol başarıyla kaldırıldı", ephemeral: true})
            member.roles.remove(r3)
        }
        else{
        member.roles.add(r3)
            await interaction.reply({ content: "Rol başarıyla eklendi!", ephemeral: true })}
          }



          else if(choice == 'Konser/CanlıMüzik'){
            if (member.roles.cache.some(role => role.id == r4)) {
                interaction.reply({content: "Rol başarıyla kaldırıldı!", ephemeral: true})
                member.roles.remove(r4)
            }
            else{
            member.roles.add(r4)
                await interaction.reply({ content: "Rol başarıyla eklendi!", ephemeral: true })}
              }


              else if(choice == 'Çekiliş'){
                if (member.roles.cache.some(role => role.id == r5)) {
                    interaction.reply({content: "Rol başarıyla kaldırıldı", ephemeral: true})
                    member.roles.remove(r5)
                }
                else{
                member.roles.add(r5)
                    await interaction.reply({ content: "Rol başarıyla eklendi!", ephemeral: true })}
                  }
    
      
            } 
     })
})

client.login(token);//Bot'un Token kısmı. Burası da ./config.json'da yer almaktadır o yüzden dokunmanıza gerek yok. 
