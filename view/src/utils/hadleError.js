const handleError = (errorData) => {
  const preContentRegex = /<pre>(.*?)<br>/s;
  const match = errorData.match(preContentRegex);
  if (match && match.length > 1) {
    const preContent = match[1];
    return preContent.trim().split(":")[1];
  } else {
    console.log("No <pre> tag content found");
    return "";
  }
};

export { handleError };
