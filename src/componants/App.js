import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

const initialItems = [
	{ id: 1, description: "Passports", quantity: 2, packed: false },
	{ id: 2, description: "Socks", quantity: 12, packed: false },
	{ id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function App() {
	const [items, setItems] = useState(initialItems);

	function handleAddItems(item) {
		setItems((items) => [...items, item]);
	}

	function handelDeleteItems(id) {
		setItems(items.filter((item) => item.id !== id));
	}

	function handleToggleItems(id) {
		setItems(
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	}
	function handleClearItems() {
		const confirmed = window.confirm(
			"Are you sure ypu want to delete All items?"
		);
		if (confirmed) setItems([]);
	}
	return (
		<div className="app">
			<Logo />
			<Form onAddItems={handleAddItems} />
			<PackingList
				items={items}
				onDeleteItems={handelDeleteItems}
				onToggleItems={handleToggleItems}
				onClearItems={handleClearItems}
			/>
			<Stats items={items} />
		</div>
	);
}
