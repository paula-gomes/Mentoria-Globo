
function enviaParticipante(event) {

	const idFetch = `${event.target.parentNode.dataset.idPart}`;

		fetch(`http://localhost:5000/participantes/${idFetch}`, { method: "GET" })
			.then(console.log(idFetch))
			.catch(err => console.log(err));
}






