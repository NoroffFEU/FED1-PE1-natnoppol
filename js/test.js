const accessToken = result.data.accessToken;
localStorage.setItem('accessToken', accessToken);

const apiKeyResponse = await fetch ('https://v2.api.noroff.dev/auth/create-api-key',{
    method: "POST",
    headers: {
        Authorization: `Bearer${accessToken}`,
        "Content-type": "application/json",
    },
    body: JSON.stringify({})
});
if(!apiKeyResponse.ok){
    throw new Error('Failed to create API Key')
}
const apiKeyResult = await apiKeyResponse.json();
const apiKey = apiKeyResult.apiKey;

console.log('3', apiKey)