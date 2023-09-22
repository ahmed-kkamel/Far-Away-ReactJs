import { useState } from "react";
import { Item } from "./Item";

export function PackingList({
	items,
	onDeleteItems,
	onToggleItems,
	onClearItems,
}) {
	// The Algorithm of sorting
	// 1) First by creating the state to control the select field
	// 2) Then implementing the next steps to sort with 1-input 2-description 3-packed status
	const [sortBy, setSortBy] = useState("input");
	let sortedItems;
	if (sortBy === "input") sortedItems = items;
	if (sortBy === "description")
		sortedItems = items
			.slice()
			.sort((a, b) => a.description.localeCompare(b.description));
	if (sortBy === "packed")
		sortedItems = items
			.slice()
			.sort((a, b) => Number(a.packed) - Number(b.packed));

	return (
		<div className="list">
			<ul>
				{sortedItems.map((item) => (
					<Item
						item={item}
						onDeleteItems={onDeleteItems}
						onToggleItems={onToggleItems}
						key={item.id}
					/>
				))}
			</ul>
			<div className="actions">
				<select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
					<option value="input">Sort by input order</option>
					<option value="description">Sort by description</option>
					<option value="packed">Sort by packed status</option>
				</select>
				<button onClick={onClearItems}>Clear items</button>
			</div>
		</div>
	);
}
