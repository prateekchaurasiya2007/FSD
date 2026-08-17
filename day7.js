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
      console.log("error...")
    }
}  