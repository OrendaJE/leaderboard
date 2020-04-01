console.clear();

const team = [
    {
        rank: 1,
        name: 'Salah',
        handle: 'Salah',
        img: 'https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/s960x960/88442093_2732730473471457_6991914433823899648_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_oc=AQnEWs8gDMSHBECr7HlQMg_W1Pka-YUR3m9GfdVVEx2p8pyl9fzkgxaeqDF501E4J8U&_nc_ht=scontent.ftun2-1.fna&_nc_tp=7&oh=755be9e0be585b4464e555c2eb7dfd28&oe=5EA6A262',
        kudos: 0
    },
    {
        rank: 2,
        name: 'Manel',
        handle: 'Manel',
        img: 'https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/s960x960/71843495_2256908657770674_7915401280854425600_o.jpg?_nc_cat=100&_nc_sid=174925&_nc_oc=AQm5kJKZctsjxfyYSY1EpxOOxPNRu5bvztKdnCtPc8FnQQPdht0vGxSawnKhP4F3MJs&_nc_ht=scontent.ftun2-1.fna&_nc_tp=7&oh=4d1dca520f3f56504f772380d3dd3913&oe=5EA6455C',
        kudos: 2104
    },
    {
        rank: 3,
        name: 'Emna',
        handle: 'Emna',
        img: 'https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/s960x960/81521952_2495244274070988_6962355184697606144_o.jpg?_nc_cat=102&_nc_sid=174925&_nc_oc=AQltrhLRhViDIF-prlbIwIsSWZ-mffk7Pkbo1UKe0FpE9ZOd07aLg6WlQVsRtr3Ovz4&_nc_ht=scontent.ftun2-1.fna&_nc_tp=7&oh=93355f5336b83afffc3a9d47bc02ef5c&oe=5EA72706',
        kudos: 0
    },
    {
        rank: 4,
        name: 'Ahmed',
        handle: 'Ahmed',
        img: 'https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/s960x960/75513440_2420649138190286_2011713212013084672_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_oc=AQnZvtCplau455v1I674nsOgCetTiKJyPje7cLsqwnuxUlKhw_clcx7KBXi7Yos5ryg&_nc_ht=scontent.ftun2-1.fna&_nc_tp=7&oh=87877513f037199c6fb577b28f620acc&oe=5EA6FD75',
        kudos: 2692
    },
    {
        rank: 5,
        name: 'Yassine',
        handle: 'Yassine',
        img: 'https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/89534892_2800112160067041_7328998692873043968_n.jpg?_nc_cat=110&_nc_sid=174925&_nc_oc=AQk6zeKOIzoGKx23HXTIPk57Eo3yZcAcpRLvcSftwD840mNZ3H9Jol_xMBgGzDi645I&_nc_ht=scontent.ftun2-1.fna&oh=6dfd462aa254263efafd9380f8d6ecd5&oe=5EA8EC0E',
        kudos: 1843
    },
    {
        rank: 6,
        name: 'Houssem',
        handle: 'Houssem',
        img: 'https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/45043831_742952592718429_1038468790901276672_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_oc=AQkexJjxrE_MjOt112S1fA94yNjN5qmWgZyBWQACYJp5jiMET7HXmzrNv19PrhSelV4&_nc_ht=scontent.ftun2-1.fna&oh=0319d27cd4032b09def717032378fa1a&oe=5EA94068',
        kudos: 0
    },

    {
        rank: 7,
        name: 'Hamza',
        handle: 'Hamza',
        img: 'https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/p960x960/81795998_3101403193417579_3185223969498202112_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_oc=AQlPHHJyM9-pQ5R2ZYfu6jQg_yByLlSQQfuW04u4Nb7CNdoGWrq9gA6fNuhJSONDAX0&_nc_ht=scontent.ftun2-1.fna&_nc_tp=6&oh=3f7bc801e036ec5d08eb4261a09a868c&oe=5EA63F63',
        kudos: 00
    },
    {
        rank: 8,
        name: 'Raslen',
        handle: 'Raslen',
        img: 'https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/s960x960/82859755_2781573001863734_8940176320151683072_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_oc=AQkt_P9BX5tgFXpew37kMicM3FsJbEIIvwjrHmxNbEthM1Jd5zlS-sR_eTHlMXYXVYE&_nc_ht=scontent.ftun2-1.fna&_nc_tp=7&oh=f75a6be40209a5964d19163067ce905f&oe=5EA99118',
        kudos: 1481
    },
    {
        rank: 9,
        name: 'Azza',
        handle: 'Azza',
        img: 'https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-1/p160x160/43561677_137284807230033_8599128386108915712_o.jpg?_nc_cat=100&_nc_sid=7206a8&_nc_oc=AQlrymYWUV_AJN6kjbgyZKq7GkJorcQPvqqM2LV-GS_rSLCr_w9a-bB-_SjsiFIc78U&_nc_ht=scontent.ftun2-1.fna&_nc_tp=6&oh=a8900311f1ee5b00e7432c362f5148f2&oe=5EA743AC',
        kudos: 1008
    },
    {
        rank: 10,
        name: 'Oussema',
        handle: 'Oussema',
        img: 'https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/83454905_2917748784935899_3926213545837985792_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_oc=AQlmIKkfyYASgX86PaeCHkhx2ikwUr7wi76Rqr7KmuyXF2d8GCLCKKGrzK0-NNxI4FM&_nc_ht=scontent.ftun2-1.fna&oh=d84f75b12f1c3988493f85f8277fc329&oe=5EA9047F',
        kudos: 1883
    },
    {
        rank: 11,
        name: 'Aziz',
        handle: 'Aziz',
        img: 'https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/s960x960/69232014_2359137820837142_2557923904060391424_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_oc=AQnR3v-oFPjdX9G-2O9aeLyv19b3xA3pkzn6nu6ipEfbDYgJAWshOYd_nhQulkaibHk&_nc_ht=scontent.ftun2-1.fna&_nc_tp=7&oh=57901479347716c30ac0d45c4ae84e63&oe=5EA78104',
        kudos: 2664
    },
    {
        rank: 12,
        name: 'Noor ',
        handle: 'Noor',
        img: 'https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/s960x960/80534660_1896072330537249_1183380588036358144_o.jpg?_nc_cat=103&_nc_sid=174925&_nc_oc=AQnCgSx3ycT2cfV8zqw2YNGVBFykgKov2R6OYB0FI06DC_ZkJ_2PppuHNtRC5O6Mjl4&_nc_ht=scontent.ftun2-1.fna&_nc_tp=7&oh=063117d8e1300dfb5551f6187e00a025&oe=5EA9BB1E',
        kudos: 0
    },
    {
        rank: 13,
        name: 'anis',
        handle: 'Anis',
        img: 'https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/p960x960/75496081_1164373743951678_9040343014853050368_o.jpg?_nc_cat=106&_nc_sid=174925&_nc_oc=AQlEdXJwGxBdxXBVOB1CUrxHfKfZ9lEJiz-aNOAO61Qt8q8rXfW7nzbOPDcom6rAmC4&_nc_ht=scontent.ftun2-1.fna&_nc_tp=6&oh=84f7d5002e23bad851b3c195f15b886b&oe=5EA7CF2C',
        kudos: 0
    },

];

function comparer(element1,element2){
    return (element1.kudos>element2.kudos)?-1:1;
}
team.sort(comparer)

const newteam = team.map((element,index) =>{
    return {...element,rank:index+1}
})
console.log()

const randomEmoji = () => {
    const emojis = ['👏', '👍', '🙌', '🤩', '🔥', '⭐️', '🏆', '💯'];
    let randomNumber = Math.floor(Math.random() * emojis.length);
    return emojis[randomNumber];
};

console.log(randomEmoji());

const list = document.getElementById('list');
console.log(list)

newteam.forEach(member => {
    let newRow = document.createElement('li');
    newRow.classList = 'c-list__item';
    newRow.innerHTML = `
		<div class="c-list__grid">
			<div class="c-flag c-place u-bg--transparent">${member.rank}</div>
			<div class="c-media">
				<img class="c-avatar c-media__img" src="${member.img}" />
				<div class="c-media__content">
					<div class="c-media__title">${member.name}</div>
					<a class="c-media__link u-text--small" href="https://facebook.com/${member.handle}" target="_blank">@${member.handle}</a>
				</div>
			</div>
			<div class="u-text--right c-kudos">
				<div class="u-mt--8">
					<strong>${member.kudos}</strong> ${randomEmoji()}
				</div>
			</div>
		</div>
	`;
    if (member.rank === 1) {
        newRow.querySelector('.c-place').classList.add('u-text--dark');
        newRow.querySelector('.c-place').classList.add('u-bg--yellow');
        newRow.querySelector('.c-kudos').classList.add('u-text--yellow');
    } else if (member.rank === 2) {
        newRow.querySelector('.c-place').classList.add('u-text--dark');
        newRow.querySelector('.c-place').classList.add('u-bg--teal');
        newRow.querySelector('.c-kudos').classList.add('u-text--teal');
    } else if (member.rank === 3) {
        newRow.querySelector('.c-place').classList.add('u-text--dark');
        newRow.querySelector('.c-place').classList.add('u-bg--orange');
        newRow.querySelector('.c-kudos').classList.add('u-text--orange');
    }
    list.appendChild(newRow);
});