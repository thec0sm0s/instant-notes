(this["webpackJsonpinstant-notes-web"]=this["webpackJsonpinstant-notes-web"]||[]).push([[0],{29:function(e,t,n){e.exports=n(62)},34:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(24),o=n.n(s),i=n(4),c=n(5),p=n(7),l=n(6),u=n(8),h=(n(34),n(10)),d=n.n(h),m=n(3),g=n.n(m),f=n(25),b=n.n(f),w=(n(35),n(36),function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,{fixed:!0},r.a.createElement(h.TopAppBarRow,null,r.a.createElement(h.TopAppBarSection,null,r.a.createElement(h.TopAppBarIcon,{navIcon:!0,tabIndex:0},r.a.createElement(g.a,{hasRipple:!0,icon:"notes"})),r.a.createElement(h.TopAppBarTitle,null,"Instant Notes")),this.props.parent.state.isLoggedIn?r.a.createElement(h.TopAppBarSection,null,r.a.createElement("div",{className:"header-username"},this.props.parent.state.username)):""),r.a.createElement(b.a,{indeterminate:!0,closed:!this.props.parent.state.isLoading})))}}]),t}(a.Component)),E=n(9),v=n(11),y=n.n(v),S=n(12),O=n(26),j=(n(54),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(p.a)(this,Object(l.a)(t).call(this,e))).state={note:"",didSomethingWentWrong:!1,shared:!1},n.textArea=r.a.createRef(),n.handleChange=n.handleChange.bind(Object(E.a)(n)),n.shareNote=n.shareNote.bind(Object(E.a)(n)),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.textArea.current.focus(),this.props.parent.startLoading(),y.a.post(this.props.parent.baseURL+"/api/",{username:this.props.parent.state.username,password:this.props.parent.state.password}).then((function(t){200===t.status&&(e.setState({note:t.data.note}),e.props.parent.stopLoading())})).catch((function(t){console.log(t),e.props.parent.stopLoading()}))}},{key:"saveNote",value:function(){var e=this;this.props.parent.startLoading(),y.a.post(this.props.parent.baseURL+"/api/",{username:this.props.parent.state.username,password:this.props.parent.state.password,note:this.state.note}).then((function(t){200===t.status&&e.props.parent.stopLoading()})).catch((function(t){console.log(t),e.setState((function(e){return e.didSomethingWentWrong=!0,e})),e.props.parent.stopLoading()}))}},{key:"shareNote",value:function(){var e=this;this.props.parent.startLoading(),y.a.post(this.props.parent.baseURL+"/api/share/",{username:this.props.parent.state.username,password:this.props.parent.state.password}).then((function(t){if(200===t.status){e.props.parent.stopLoading();var n=t.data.share_url;navigator.clipboard.writeText(n),e.setState((function(e){return e.shared=!0,e}))}})).catch((function(t){console.log(t),e.setState((function(e){return e.didSomethingWentWrong=!0,e})),e.props.parent.stopLoading()}))}},{key:"handleChange",value:function(e){this.setState({note:e.value}),this.saveNote()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("label",null,r.a.createElement("div",{className:"content"},r.a.createElement(g.a,{icon:"arrow_forward_ios"}),r.a.createElement("textarea",{ref:this.textArea,className:"content-input",value:this.state.note,onChange:function(t){return e.handleChange(t.currentTarget)}}))),this.state.didSomethingWentWrong?r.a.createElement(S.Snackbar,{message:"Sorry, something went wrong while saving your note.",onClose:function(){return e.setState((function(e){return e.didSomethingWentWrong=!1,e}))}}):""),r.a.createElement("div",{className:"fab"},r.a.createElement(O.Fab,{icon:r.a.createElement(g.a,{icon:"share"}),onClick:this.shareNote})),this.state.shared?r.a.createElement(S.Snackbar,{closeOnEscape:!0,actionText:"Okay",message:"Sharing link has been copied to clipboard.",onClose:function(){return e.setState((function(e){e.shared=!1}))}}):"")}}]),t}(a.Component)),L=n(13),k=n.n(L),C=n(27),W=n(28),N=n.n(W),x=(n(58),n(59),n(60),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(p.a)(this,Object(l.a)(t).call(this,e))).state={isPasswordWrong:!1,didSomethingWentWrong:!1,showPassword:!1},n.handleChange=n.handleChange.bind(Object(E.a)(n)),n.hideErrors=n.hideErrors.bind(Object(E.a)(n)),n.login=n.login.bind(Object(E.a)(n)),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.props.parent.setState((function(t){return t[e.name]=e.value,t}))}},{key:"hideErrors",value:function(){this.setState((function(e){return e.isPasswordWrong=!1,e.didSomethingWentWrong=!1,e}))}},{key:"login",value:function(){var e=this;this.props.parent.startLoading(),y.a.post(this.props.parent.baseURL+"/api/",{username:this.props.parent.state.username,password:this.props.parent.state.password}).then((function(t){200===t.status&&e.props.parent.setState((function(e){return e.isLoggedIn=!0,e.isLoading=!1,e}))})).catch((function(t){401===t.response.status?e.setState((function(e){return e.isPasswordWrong=!0,e})):e.setState((function(e){return e.didSomethingWentWrong=!0,e})),e.props.parent.stopLoading()}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"login-component"},r.a.createElement(g.a,{icon:"account_circle"}),r.a.createElement(k.a,{label:"Username"},r.a.createElement(L.Input,{name:"username",id:"username",value:this.props.parent.state.username,onChange:function(t){return e.handleChange(t.currentTarget)}})),r.a.createElement(k.a,{label:"Password",trailingIcon:r.a.createElement(N.a,{style:{top:"4px"}},r.a.createElement(g.a,{icon:"remove_red_eye"})),onTrailingIconSelect:function(){return e.setState((function(e){return e.showPassword=!e.showPassword,e}))}},r.a.createElement(L.Input,{name:"password",type:this.state.showPassword?"text":"password",id:"password",value:this.props.parent.state.password,onChange:function(t){return e.handleChange(t.currentTarget)}})),r.a.createElement(C.Button,{raised:!0,icon:r.a.createElement(g.a,{icon:"lock_open"}),onClick:this.login},"Login"),this.state.isPasswordWrong?r.a.createElement(S.Snackbar,{message:"The password you entered is incorrect.",onClose:this.hideErrors}):"",this.state.didSomethingWentWrong?r.a.createElement(S.Snackbar,{message:"Sorry, something went wrong.",onClose:this.hideErrors}):"")}}]),t}(a.Component)),P=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(p.a)(this,Object(l.a)(t).call(this,e))).textArea=r.a.createRef(),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.textArea.current.focus()}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("label",null,r.a.createElement("div",{className:"content"},r.a.createElement(g.a,{icon:"arrow_forward_ios"}),r.a.createElement("span",{style:{fontFamily:"Roboto",position:"absolute"}},r.a.createElement("h2",{style:{display:"inline"}},window.sharedPayload?window.sharedPayload.username:"")),r.a.createElement("textarea",{ref:this.textArea,className:"content-input",value:window.sharedPayload?window.sharedPayload.note:"",onChange:function(){},style:{backgroundColor:"white"}}))))}}]),t}(a.Component),I=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(p.a)(this,Object(l.a)(t).call(this))).baseURL="http://127.0.0.1:5000",e.state={username:"",password:"",isLoggedIn:!1,isLoading:!1},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"startLoading",value:function(){this.setState((function(e){return e.isLoading=!0,e}))}},{key:"stopLoading",value:function(){this.setState((function(e){return e.isLoading=!1,e}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,{parent:this}),window.sharedPayload?r.a.createElement(P,null):this.state.isLoggedIn?r.a.createElement(j,{parent:this}):r.a.createElement(x,{parent:this}))}}]),t}(a.Component);n(61);o.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.e4ce3982.chunk.js.map