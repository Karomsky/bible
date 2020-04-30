const apiKey = '78826d6495df5466375a19bc1a747a54';

function wantedverse(agent) {
    const book = agent.parameters.book;
    const chapter = agent.parameters.chapter.toString();
    const verse = agent.parameters.verse.toString();
    const searchStr = book + chapter + '.' + verse;

    //agent.add("Intent called: "+ searchStr);
    return axios.get("https://api.biblia.com/v1/bible/content/ASV.txt?passage=searchStr&key=${apiKey}")
        .then(result => {
            console.log(result);
            var text = result.value;

            agent.add("Intent called: " + searchStr + text);
        });


}