

async function testWeb3Forms() {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: "97b13b11-1842-46c0-9c47-f949802b2321",
      name: "Test User",
      email: "test@example.com",
      subject: "Test Subject",
      message: "Test message body"
    }),
  });

  const json = await response.json();
  console.log("Status:", response.status);
  console.log("Response:", json);
}

testWeb3Forms();
