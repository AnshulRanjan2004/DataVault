# DataVault
DataVault is an application that allows users to securely store and share their files using Web3.storage and IPFS. The application encrypts user files before uploading them to Web3.storage, ensuring that only users with the decryption code can access the files.

## Features
* Securely store and share files using Web3.storage and IPFS
* Encrypt files before uploading them to Web3.storage
* Generate a link to share files with other users
* View and manage shared files in the "My Files" page
* Built using Vue,Tailwind CSS and Backend JavaScript

## Contributing
Contributions are welcome! If you have an idea for a new feature or find a bug, please open an issue or submit a pull request.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
## Usage
### 1. Upload a file:
Click the "Upload File" button on the home page and select the file you want to upload. The application will encrypt the file and upload it to Web3.storage.

### 2. Share a file:
After uploading a file, the application will generate a link that you can share with other users. To share a file, simply copy the link and send it to the user you want to share the file with. They will need the decryption code to access the file.

### 3. View shared files:
You can view and manage shared files in the "My Files" page. This page displays all files that have been shared with you, along with the decryption code needed to access them.

## Screenshots

![image](https://user-images.githubusercontent.com/91585064/231111116-30862ace-48d1-4da0-a3d7-d0155e16d6d1.png)


![image](https://user-images.githubusercontent.com/91585064/231111510-9311abc6-692d-443a-8c06-f7019094b253.png)


## License
DataVault is licensed under the MIT License. See LICENSE.md for more information.
