async function testFormSubmit() {
  try {
    const response = await fetch("https://formsubmit.co/ajax/sachinportfoliowebdev@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: "Test User",
        email: "test@example.com",
        subject: "Test Subject",
        message: "Test message body"
      }),
    });

    const text = await response.text();
    console.log("Status:", response.status);
    console.log("Response:", text);
  } catch (err) {
    console.error(err);
  }
}

testFormSubmit();
