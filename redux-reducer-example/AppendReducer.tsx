

function modifyString(originalString, action) {
    switch (action.type) {
        case "append":
            return originalString + action.newContents;
    }
}