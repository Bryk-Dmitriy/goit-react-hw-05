export  const Listener = () => {
	const handleClick = () => {
		alert("I'm a button!");
	};

	return (
		<>
			<button onClick={handleClick}>First button</button>
			<button onClick={evt => console.log(evt)}>Second button</button>
		</>
	);
};