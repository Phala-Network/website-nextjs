export default {
  entry: ['src/components/ui/*', 'src/app/**/*.{mdx,md}'],
  compilers: {
    mdx: true,
    css: (text: string) =>
      [...text.matchAll(/(?<=@)(import|plugin)[^;]+/g)]
        .join('\n')
        .replace('plugin', 'import'),
  },
}
