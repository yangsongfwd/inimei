var custom_settings = {
    previewParserPath: "/markitup/preview",
    onShiftEnter:		{keepDefault:false, openWith:'\n\n'},
    markupSet: [
        {name:'First Level Heading', key:'1', placeHolder:'Your title here...', closeWith:function(markItUp) { return miu.markdownTitle(markItUp, '=') } },
        {name:'Second Level Heading', key:'2', placeHolder:'Your title here...', closeWith:function(markItUp) { return miu.markdownTitle(markItUp, '-') } },
        {name:'Heading 3', key:'3', openWith:'### ', placeHolder:'Your title here...' },
        {name:'Heading 4', key:'4', openWith:'#### ', placeHolder:'Your title here...' },
        {name:'Heading 5', key:'5', openWith:'##### ', placeHolder:'Your title here...' },
        {name:'Heading 6', key:'6', openWith:'###### ', placeHolder:'Your title here...' },
        {separator:'---------------' },
        {name:'Bold', key:'B', openWith:'**', closeWith:'**'},
        {name:'Italic', key:'I', openWith:'_', closeWith:'_'},
        {name:'Strikethought', key:'S', openWith:'~~', closeWith:'~~'},
        {separator:'---------------' },
        {name:'Bulleted List', openWith:'* ' },
        {name:'Numeric List', openWith:'1. ' },
        {separator:'---------------' },
        {name:'Picture', key:'P', replaceWith:'![[![Alternative text]!]]([![Url:!:http://]!] "[![Title]!]")'},
        {name:'Link', key:'L', openWith:'[', closeWith:']([![Url:!:http://]!] "[![Title]!]")', placeHolder:'Your text to link here...' },
        {separator:'---------------'},
        {name:'Quotes', openWith:'> '},
        {name:'Code Block / Code', openWith:'``` ruby\n', closeWith:'\n```'}//,
        //{separator:'---------------'},
        //{name:'Preview', call:'preview', className:"preview"}
    ]
}