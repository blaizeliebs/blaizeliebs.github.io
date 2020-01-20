/**
 * my helper function to get the issues from a certain repo
 * the `url` is passed through from where the function is called
 * this returns a promise and you will see in moreDetails.js that i had to work around this.
 */
export default function getGitHubIssues(url) {
  if (url) {
    return new Promise((resolve, reject) => {
      fetch(`https://api.github.com/search/issues?q=repo:${url}`, {
        credentials: 'same-origin',
      })
        .then((response) => response.json())
        .then((value) => resolve({ value }))
        .catch(reject);
    });
  }
  return null;
}
