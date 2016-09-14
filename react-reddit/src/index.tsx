import * as $ from "jquery";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { ApiResponse } from "./reddit";
import { SubmissionComponent } from "./RedditSubmission"

function displaySubreddit(baseUrl: string, subreddit: string) {
    let request = $.ajax({
        url: `${baseUrl}/r/${subreddit}.json`,
    });

    request.done(response => {
        let submissions = (response as ApiResponse).data.children;
        let components = submissions.map((value, index) =>
            <SubmissionComponent key={index} elementPosition={index} {...value.data} />
        );

        ReactDOM.render(<div>{components}</div>, document.getElementById("content"));
    });
}

const localUrl = ".";
const redditUrl = "http://www.reddit.com";

displaySubreddit(redditUrl, "puppies");
