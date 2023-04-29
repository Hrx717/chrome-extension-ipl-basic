async function getMatchData() {

    return await fetch("Note - {Get your api from https://cricketdata.org/}")
        .then(data => data.json())
        .then(data => {
            if (data.status != "success")return;

            const matchesList = data.data;

            if(!matchesList)return [];

            const relevantData = matchesList.filter(match => match.series_id == "c75f8952-74d4-416f-b7b4-7da4b4e3ae6e").map(match => [match.name, match.status, match.date, match.venue]);
            console.log(relevantData);

            const container = document.getElementById("matches");
            for(let i=0; i<relevantData.length; i++) {
                const list = document.createElement('div');
                list.classList.add('list');

                const heading = document.createElement('h2');
                const node = document.createTextNode(`${i+1}. ${relevantData[i][0]}`);
                heading.appendChild(node);

                const status = document.createElement('p');
                const node2 = document.createTextNode(relevantData[i][1]);
                status.appendChild(node2);

                const date = document.createElement('p');
                const node3 = document.createTextNode(relevantData[i][2]);
                date.appendChild(node3);

                const venue = document.createElement('p');
                const node4 = document.createTextNode(relevantData[i][3]);
                venue.appendChild(node4);

                list.appendChild(heading);
                list.appendChild(status);
                list.appendChild(date);
                list.appendChild(venue);
                container.appendChild(list);
            }


            return relevantData;

        })
        .catch(e => console.log(e));
}

getMatchData();
