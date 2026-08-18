import fs from "fs/promises"
const fileName="student.txt";
async function createFile(){
    try{
    await fs.writeFile(
        fileName,"Name: Prateek\nEmail:abc@gmail.com,B.tech"
    );
    console.log("file created..")
    }
    catch(error)
    {
      console.log("error......")
    }
}then()
import fs from "fs/promises";

const fileName = "student.txt";


// 2. READ
async function readFile() {
    try {
        const data = await fs.readFile(fileName, "utf8");

        console.log("\nFile Content:");
        console.log(data);
    } catch (error) {
        console.log("Error:", error.message);
    }
}


// 3. UPDATE
async function updateFile() {
    try {
        await fs.appendFile(
            fileName,
            "\nCollege: ABES Engineering College............",
            "utf8"
        );

        console.log("\nFile updated successfully");
    } catch (error) {
        console.log("Error:", error.message);
    }
}


// 4. DELETE
async function deleteFile() {
    try {
        await fs.unlink(fileName);

        console.log("\nFile deleted successfully");
    } catch (error) {
        console.log("Error:", error.message);
    }
}


// Execute CRUD operations
async function main() {

    await createFile();

    await readFile();

    await updateFile();

    //await deleteFile();
}

main();