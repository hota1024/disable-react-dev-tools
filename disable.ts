console.log(
  '%cDisabled%cReact Developer Tools',
  'padding: 10px; border-radius: 6px 0 0 6px; background: #f44336; color: #FFCDD2;',
  'padding: 10px; border-radius: 0 6px 6px 0; background: black; color: #03A9F4;'
)

declare let __REACT_DEVTOOLS_GLOBAL_HOOK__: {
  inject(): void
}

__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = () => {}
