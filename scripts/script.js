// Function to update the preview in the iframe
function updatePreview() {
    // Retrieve code from each textarea
    const html = document.getElementById("htmlCode").value;
    const css = `<style>${document.getElementById("cssCode").value}</style>`;
    const js = `<script>${document.getElementById("jsCode").value}<\/script>`;
    
    // Select the iframe and create the full content to display
    const previewFrame = document.getElementById("preview");
    const previewContent = `
        ${html}
        ${css}
        ${js}
    `;
    
    // Update the iframe with the combined code
    previewFrame.contentDocument.open();
    previewFrame.contentDocument.write(previewContent);
    previewFrame.contentDocument.close();
}
