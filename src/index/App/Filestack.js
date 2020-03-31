import React, { useState } from "react";
import { Flex } from "antd-mobile";
import GetImages from "./Filestack/GetImages";
import Preview from "./Filestack/Preview";

const API_KEY = process.env.API_KEY;
const PROCESS_API = process.env.PROCESS_API;

export default function Container() {
  const [preview, setPreview] = useState("");

  return (
    <div>
      <GetImages
        onSubmit={(firstUrl, secondUrl) => {
          setPreview(
            `${PROCESS_API}/${API_KEY}/collage=files:["${firstUrl}"],w:800,h:600,/"${secondUrl}"`
          );
        }}
      />
      <Flex>
        <Flex.Item className="flex justify-center">
          <Preview preview={preview} />
        </Flex.Item>
      </Flex>
    </div>
  );
}

// import * as filestack from "filestack-js";
// const client = filestack.init(API_KEY);
// export default class Container extends Component {

//   constructor(props) {
//     super(props);
//     this.state = { url: '' };
//     // this.state = {
//     //   url: 'https://process.filestackapi.com/collage=files:[sLN8lGHQ6usJyMhTPRdv,V1PCGBLReaCZ6aPQkHte],w:800,h:600' };
//     this.handleUploadDone = this.handleUploadDone.bind(this);
//   }

//   openFilestack = () => {
//     return client.picker(
//       {
//         accept: 'image/*',
//         maxSize: 1024 * 1024 * 5,
//         minFiles: 2,
//         maxFiles: 6,
//         onOpen: () => console.log('opened!'),
//         onUploadDone: (res) => this.handleUploadDone(res),
//       }
//     ).open();
//   };

//   async handleUploadDone({ filesUploaded }) {
//     try {
//       const first = filesUploaded.shift();
//       const transformation = filesUploaded.reduce((acc, file, index, files) => {
//         return index < files.length - 1
//           ? `${acc},${file.handle}`
//           : `${acc}],w:800,h:600,/${file.handle}`;
//       }, `/collage=files:[${first.handle}`);

//       console.log('------------------------------------');
//       console.log('transformation', transformation);
//       console.log('------------------------------------');

//       this.setState({ url: processAPI + transformation });
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   render() {
//     const { url } = this.state;
//     return (
//       <div className="container">
//         <GetImages onSubmit={(firstUrl, secondUrl) => {
//           console.log('------------------------------------');
//           console.log(`https://process.filestackapi.com/AyUAuYoWSQx2jUNVoq31Az/collage=files:["${firstUrl}"],w:800,h:600,/"${secondUrl}"`);
//           console.log('------------------------------------');
//         }} />

//         <div className="page-header">
//           <h1>Filestack Collage <small>in action</small></h1>
//         </div>
//         <div className="row">
//           <div className="col-md-8 col-md-offset-2 text-center">
//             <div className="thumbnail">
//               <img
//                 className="img-responsive"
//                 src={url || 'http://placehold.it/800x600?text=Collage'}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="text-center">
//             <button className="btn btn-filestack" onClick={this.openFilestack}>
//               <i className="glyphicon glyphicon-upload"  /> Upload
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
