import { useState } from "react";

export function Form({ onAddItems }) {
	const [description, setDescription] = useState("");
	const [quantity, setQuantity] = useState(1);

	function handelSubmit(e) {
		e.preventDefault();

		if (!description) return;
		const newItem = {
			description,
			quantity,
			packed: false,
			id: Date.now(),
		};
		onAddItems(newItem);
		setDescription("");
		setQuantity(1);
	}
	return (
		<form className="add-form" onSubmit={handelSubmit}>
			<h3>What do you need for your 😍 trip ? </h3>
			<select
				value={quantity}
				onChange={(e) => {
					// console.log(e.target);
					setQuantity(Number(e.target.value));
				}}
			>
				{Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
					<option value={num} key={num}>
						{num}
					</option>
				))}
			</select>
			<input
				type="text"
				placeholder="Item..."
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button>Add</button>
		</form>
	);
}
