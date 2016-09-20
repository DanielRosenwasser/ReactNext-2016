interface AppendAction {
    type: "append";
    newContents: string;
}

interface EraseAction {
    type: "erase";
    numChars: number;
}

type Action = AppendAction | EraseAction;

/**
 * Try hovering over 'action' in each branch using an editor with TypeScript support.
 */
function modifyString(originalString: string, action: Action) {
    switch (action.type) {
        case "append":
            return originalString + action.newContents;
        case "erase":
            return originalString.slice(0, -action.numChars);
    }
}

modifyString("hello ", {
    type: "append",
    newContents: "world"
});




