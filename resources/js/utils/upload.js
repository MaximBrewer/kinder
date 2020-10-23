import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: "100%",
    height: 200,
    padding: 4,
    boxSizing: 'border-box'
};

const dropZoneStyles = {
    borderRadius: "100px",
    borderWidth: "3px",
    backgroundColor: "#f3410e",
    cursor: 'pointer',
    boxShadow: null,
    lineHeight: "32px",
    padding: "11px",
    borderColor: "#ffffff",
    letterSpacing: "-1px",
    borderStyle: "solid",
    color: "#ffffff",
    fontSize: "18px",
    textAlign: "center",
    '&:hover': {
        borderColor: "#dedede",
    },
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    justifyContent: "center",
    textAlign: "center",
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};


function Previews(props) {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
            props.setFiles(acceptedFiles)
        }
    });

    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    style={img}
                />
            </div>
        </div>
    ));

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <div className="dz-wrapper">
            <div {...getRootProps({ className: 'dropzone' })} style={dropZoneStyles}>
                <input {...getInputProps()} />
                <span style={window.innerWidth >= 1024 ? { whiteSpace: "nowrap" } : {}}>ЗАГРУЗИТЬ ФОТО РЕБЕНКА</span>
            </div>
            <aside style={thumbsContainer}>
                {thumbs}
            </aside>
        </div>
    );
}

export default Previews;