export interface PostCodeBlock {
  type: 'code';
  language: string;
  filename?: string;
  content: string;
}

export interface PostParagraph {
  type: 'paragraph';
  content: string;
}

export type PostBlock = PostCodeBlock | PostParagraph;

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  body: PostBlock[];
}

export const POSTS: Post[] = [
  {
    slug: 'two-sources-of-truth-zero-reconciliation',
    title: 'Two Sources of Truth, Zero Reconciliation',
    date: '2026-07-01',
    description:
      'How JavaDropbox handles file metadata when the filesystem and the database disagree.',
    tags: ['java', 'spring-boot', 'postgresql', 'system-design'],
    body: [
      {
        type: 'paragraph',
        content:
          'JavaDropbox, a self-hosted file storage app I built, already had a fully working file browser by the time I added PostgreSQL. It walked the serving directory on every request, built a tree, and displayed everything it found. No database. No metadata table. The tree builder was pure filesystem:',
      },
      {
        type: 'code',
        language: 'java',
        filename: 'FileServingService.java',
        content: `<pre class="shiki shiki-themes light-plus dark-plus" style="background-color:#FFFFFF;--shiki-dark-bg:#1E1E1E;color:#000000;--shiki-dark:#D4D4D4" tabindex="0"><code><span class="line"><span style="color:#0000FF;--shiki-dark:#569CD6">private</span><span style="color:#267F99;--shiki-dark:#4EC9B0"> List</span><span style="color:#000000;--shiki-dark:#D4D4D4">&#x3C;FileTreeNode> </span><span style="color:#795E26;--shiki-dark:#DCDCAA">buildTreeRecursively</span><span style="color:#000000;--shiki-dark:#D4D4D4">(</span><span style="color:#267F99;--shiki-dark:#4EC9B0">File</span><span style="color:#000000;--shiki-dark:#D4D4D4"> directory) {</span></span>
<span class="line"><span style="color:#267F99;--shiki-dark:#4EC9B0">    File</span><span style="color:#000000;--shiki-dark:#D4D4D4">[] </span><span style="color:#001080;--shiki-dark:#9CDCFE">files</span><span style="color:#000000;--shiki-dark:#D4D4D4"> = </span><span style="color:#001080;--shiki-dark:#9CDCFE">directory</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">listFiles</span><span style="color:#000000;--shiki-dark:#D4D4D4">();</span></span>
<span class="line"><span style="color:#AF00DB;--shiki-dark:#C586C0">    if</span><span style="color:#000000;--shiki-dark:#D4D4D4"> (files == </span><span style="color:#0000FF;--shiki-dark:#569CD6">null</span><span style="color:#000000;--shiki-dark:#D4D4D4">) {</span></span>
<span class="line"><span style="color:#AF00DB;--shiki-dark:#C586C0">        return</span><span style="color:#001080;--shiki-dark:#9CDCFE"> Collections</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">emptyList</span><span style="color:#000000;--shiki-dark:#D4D4D4">();</span></span>
<span class="line"><span style="color:#000000;--shiki-dark:#D4D4D4">    }</span></span>
<span class="line"><span style="color:#267F99;--shiki-dark:#4EC9B0">    List</span><span style="color:#000000;--shiki-dark:#D4D4D4">&#x3C;</span><span style="color:#267F99;--shiki-dark:#4EC9B0">FileTreeNode</span><span style="color:#000000;--shiki-dark:#D4D4D4">> </span><span style="color:#001080;--shiki-dark:#9CDCFE">nodes</span><span style="color:#000000;--shiki-dark:#D4D4D4"> = </span><span style="color:#AF00DB;--shiki-dark:#C586C0">new</span><span style="color:#267F99;--shiki-dark:#4EC9B0"> ArrayList</span><span style="color:#000000;--shiki-dark:#D4D4D4">&#x3C;>();</span></span>
<span class="line"><span style="color:#AF00DB;--shiki-dark:#C586C0">    for</span><span style="color:#000000;--shiki-dark:#D4D4D4"> (</span><span style="color:#267F99;--shiki-dark:#4EC9B0">File</span><span style="color:#001080;--shiki-dark:#9CDCFE"> file</span><span style="color:#AF00DB;--shiki-dark:#C586C0"> :</span><span style="color:#000000;--shiki-dark:#D4D4D4"> files) {</span></span>
<span class="line"><span style="color:#267F99;--shiki-dark:#4EC9B0">        FileTreeNode</span><span style="color:#001080;--shiki-dark:#9CDCFE"> node</span><span style="color:#000000;--shiki-dark:#D4D4D4"> = </span><span style="color:#AF00DB;--shiki-dark:#C586C0">new</span><span style="color:#795E26;--shiki-dark:#DCDCAA"> FileTreeNode</span><span style="color:#000000;--shiki-dark:#D4D4D4">(</span><span style="color:#001080;--shiki-dark:#9CDCFE">file</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">getName</span><span style="color:#000000;--shiki-dark:#D4D4D4">(), </span><span style="color:#001080;--shiki-dark:#9CDCFE">file</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">isDirectory</span><span style="color:#000000;--shiki-dark:#D4D4D4">(), </span><span style="color:#001080;--shiki-dark:#9CDCFE">file</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">length</span><span style="color:#000000;--shiki-dark:#D4D4D4">());</span></span>
<span class="line"><span style="color:#AF00DB;--shiki-dark:#C586C0">        if</span><span style="color:#000000;--shiki-dark:#D4D4D4"> (</span><span style="color:#001080;--shiki-dark:#9CDCFE">file</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">isDirectory</span><span style="color:#000000;--shiki-dark:#D4D4D4">()) {</span></span>
<span class="line"><span style="color:#267F99;--shiki-dark:#4EC9B0">            List</span><span style="color:#000000;--shiki-dark:#D4D4D4">&#x3C;</span><span style="color:#267F99;--shiki-dark:#4EC9B0">FileTreeNode</span><span style="color:#000000;--shiki-dark:#D4D4D4">> </span><span style="color:#001080;--shiki-dark:#9CDCFE">children</span><span style="color:#000000;--shiki-dark:#D4D4D4"> = </span><span style="color:#795E26;--shiki-dark:#DCDCAA">buildTreeRecursively</span><span style="color:#000000;--shiki-dark:#D4D4D4">(file);</span></span>
<span class="line"><span style="color:#001080;--shiki-dark:#9CDCFE">            node</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">setChildren</span><span style="color:#000000;--shiki-dark:#D4D4D4">(children);</span></span>
<span class="line"><span style="color:#000000;--shiki-dark:#D4D4D4">        }</span></span>
<span class="line"><span style="color:#001080;--shiki-dark:#9CDCFE">        nodes</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">add</span><span style="color:#000000;--shiki-dark:#D4D4D4">(node);</span></span>
<span class="line"><span style="color:#000000;--shiki-dark:#D4D4D4">    }</span></span>
<span class="line"><span style="color:#AF00DB;--shiki-dark:#C586C0">    return</span><span style="color:#000000;--shiki-dark:#D4D4D4"> nodes;</span></span>
<span class="line"><span style="color:#000000;--shiki-dark:#D4D4D4">}</span></span></code></pre>`,
      },
      {
        type: 'paragraph',
        content:
          'This worked fine until I needed to know who uploaded a file. The filesystem can tell you when a file was created and when it was last modified, but it has no concept of "who." I needed a file_metadata table for ownership, audit history, and eventually version tracking. What I didn\'t have was a migration path for the files already sitting on disk.',
      },
      {
        type: 'paragraph',
        content:
          'The straightforward approach would be to make the database the sole source of truth. Every file listing comes from SELECT * FROM file_metadata. One source, clean queries (you can make this work with findAll and build the tree in memory, or use recursive CTEs). But this breaks immediately for a self-hosted file storage app. Users can drop files into the serving directory through their OS file manager, through scp, through a mounted drive. Any file placed on disk without going through the upload API has no metadata row. Under a database-only model, that file is invisible. It exists on disk but never shows up in the UI.',
      },
      {
        type: 'paragraph',
        content:
          'The opposite approach, staying filesystem-only, doesn\'t hold either. BasicFileAttributes gives you creationTime and lastModifiedTime, but these values aren\'t stable. Copy a file from one volume to another and the creation time resets to the copy timestamp. Move it within the same volume and it might preserve the original. The behavior varies by OS and filesystem. More importantly, there\'s no ownership field to read. Audit history is impossible.',
      },
      {
        type: 'paragraph',
        content:
          'I considered two structured alternatives before landing on what\'s in the codebase now.',
      },
      {
        type: 'paragraph',
        content:
          'Startup reconciliation scan. Walk the entire directory tree when the application boots, compare it against file_metadata, create rows for anything missing. This handles pre-existing files, but it means the first request after boot blocks on a potentially slow scan. Worse, it doesn\'t handle files added while the app is running. You\'d need periodic re-scans, which is polling the filesystem and hoping nothing slips through between intervals. For a side project with one user, the complexity wasn\'t justified.',
      },
      {
        type: 'paragraph',
        content:
          'Java WatchService for real-time sync. Register a filesystem watcher on the serving directory, react to create/modify/delete events by updating the database. In theory this keeps the two systems in lockstep. In practice, WatchService on macOS uses polling under the hood, not native filesystem events. It\'s unreliable for large directory trees and has documented issues with overflow events where changes get dropped silently. I didn\'t want to build the core metadata system on a notification mechanism I couldn\'t trust to deliver every event.',
      },
      {
        type: 'paragraph',
        content:
          'What I actually built: filesystem for existence, database for enrichment. The directory tree is always constructed by walking the real filesystem. For each node, the code checks whether a FileMetadata row exists. If it does, timestamps and ownership come from PostgreSQL. If it doesn\'t, the code falls back to BasicFileAttributes and labels the owner "system".',
      },
      {
        type: 'paragraph',
        content: 'The branching lives in one method:',
      },
      {
        type: 'code',
        language: 'java',
        filename: 'FileServingService.java',
        content: `<pre class="shiki shiki-themes light-plus dark-plus" style="background-color:#FFFFFF;--shiki-dark-bg:#1E1E1E;color:#000000;--shiki-dark:#D4D4D4" tabindex="0"><code><span class="line"><span style="color:#0000FF;--shiki-dark:#569CD6">private</span><span style="color:#267F99;--shiki-dark:#4EC9B0"> void</span><span style="color:#795E26;--shiki-dark:#DCDCAA"> populateNodeMetadata</span><span style="color:#000000;--shiki-dark:#D4D4D4">(</span><span style="color:#267F99;--shiki-dark:#4EC9B0">FileTreeNode</span><span style="color:#000000;--shiki-dark:#D4D4D4"> node, </span><span style="color:#267F99;--shiki-dark:#4EC9B0">String</span><span style="color:#000000;--shiki-dark:#D4D4D4"> currentPath, </span><span style="color:#267F99;--shiki-dark:#4EC9B0">File</span><span style="color:#000000;--shiki-dark:#D4D4D4"> file) {</span></span>
<span class="line"><span style="color:#267F99;--shiki-dark:#4EC9B0">    Optional</span><span style="color:#000000;--shiki-dark:#D4D4D4">&#x3C;</span><span style="color:#267F99;--shiki-dark:#4EC9B0">FileMetadata</span><span style="color:#000000;--shiki-dark:#D4D4D4">> </span><span style="color:#001080;--shiki-dark:#9CDCFE">metadataOpt</span><span style="color:#000000;--shiki-dark:#D4D4D4"> = </span><span style="color:#001080;--shiki-dark:#9CDCFE">fileMetadataRepository</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">findByPath</span><span style="color:#000000;--shiki-dark:#D4D4D4">(currentPath);</span></span>
<span class="line"><span style="color:#AF00DB;--shiki-dark:#C586C0">    if</span><span style="color:#000000;--shiki-dark:#D4D4D4"> (</span><span style="color:#001080;--shiki-dark:#9CDCFE">metadataOpt</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">isPresent</span><span style="color:#000000;--shiki-dark:#D4D4D4">()) {</span></span>
<span class="line"><span style="color:#267F99;--shiki-dark:#4EC9B0">        FileMetadata</span><span style="color:#001080;--shiki-dark:#9CDCFE"> meta</span><span style="color:#000000;--shiki-dark:#D4D4D4"> = </span><span style="color:#001080;--shiki-dark:#9CDCFE">metadataOpt</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">get</span><span style="color:#000000;--shiki-dark:#D4D4D4">();</span></span>
<span class="line"><span style="color:#001080;--shiki-dark:#9CDCFE">        node</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">setId</span><span style="color:#000000;--shiki-dark:#D4D4D4">(</span><span style="color:#001080;--shiki-dark:#9CDCFE">meta</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">getId</span><span style="color:#000000;--shiki-dark:#D4D4D4">());</span></span>
<span class="line"><span style="color:#AF00DB;--shiki-dark:#C586C0">        if</span><span style="color:#000000;--shiki-dark:#D4D4D4"> (</span><span style="color:#001080;--shiki-dark:#9CDCFE">meta</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">getCreatedAt</span><span style="color:#000000;--shiki-dark:#D4D4D4">() != </span><span style="color:#0000FF;--shiki-dark:#569CD6">null</span><span style="color:#000000;--shiki-dark:#D4D4D4">) {</span></span>
<span class="line"><span style="color:#001080;--shiki-dark:#9CDCFE">            node</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">setCreatedDate</span><span style="color:#000000;--shiki-dark:#D4D4D4">(</span><span style="color:#001080;--shiki-dark:#9CDCFE">meta</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">getCreatedAt</span><span style="color:#000000;--shiki-dark:#D4D4D4">().</span><span style="color:#795E26;--shiki-dark:#DCDCAA">format</span><span style="color:#000000;--shiki-dark:#D4D4D4">(DATE_FORMATTER));</span></span>
<span class="line"><span style="color:#000000;--shiki-dark:#D4D4D4">        }</span></span>
<span class="line"><span style="color:#AF00DB;--shiki-dark:#C586C0">        if</span><span style="color:#000000;--shiki-dark:#D4D4D4"> (</span><span style="color:#001080;--shiki-dark:#9CDCFE">meta</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">getUpdatedAt</span><span style="color:#000000;--shiki-dark:#D4D4D4">() != </span><span style="color:#0000FF;--shiki-dark:#569CD6">null</span><span style="color:#000000;--shiki-dark:#D4D4D4">) {</span></span>
<span class="line"><span style="color:#001080;--shiki-dark:#9CDCFE">            node</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">setLastModified</span><span style="color:#000000;--shiki-dark:#D4D4D4">(</span><span style="color:#001080;--shiki-dark:#9CDCFE">meta</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">getUpdatedAt</span><span style="color:#000000;--shiki-dark:#D4D4D4">().</span><span style="color:#795E26;--shiki-dark:#DCDCAA">format</span><span style="color:#000000;--shiki-dark:#D4D4D4">(DATE_FORMATTER));</span></span>
<span class="line"><span style="color:#000000;--shiki-dark:#D4D4D4">        }</span></span>
<span class="line"><span style="color:#AF00DB;--shiki-dark:#C586C0">        if</span><span style="color:#000000;--shiki-dark:#D4D4D4"> (</span><span style="color:#001080;--shiki-dark:#9CDCFE">meta</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">getOwner</span><span style="color:#000000;--shiki-dark:#D4D4D4">() != </span><span style="color:#0000FF;--shiki-dark:#569CD6">null</span><span style="color:#000000;--shiki-dark:#D4D4D4">) {</span></span>
<span class="line"><span style="color:#001080;--shiki-dark:#9CDCFE">            node</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">setOwnerName</span><span style="color:#000000;--shiki-dark:#D4D4D4">(</span><span style="color:#001080;--shiki-dark:#9CDCFE">meta</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">getOwner</span><span style="color:#000000;--shiki-dark:#D4D4D4">().</span><span style="color:#795E26;--shiki-dark:#DCDCAA">getUsername</span><span style="color:#000000;--shiki-dark:#D4D4D4">());</span></span>
<span class="line"><span style="color:#000000;--shiki-dark:#D4D4D4">        }</span></span>
<span class="line"><span style="color:#000000;--shiki-dark:#D4D4D4">    } </span><span style="color:#AF00DB;--shiki-dark:#C586C0">else</span><span style="color:#000000;--shiki-dark:#D4D4D4"> {</span></span>
<span class="line"><span style="color:#795E26;--shiki-dark:#DCDCAA">        populateNodeFromFileSystem</span><span style="color:#000000;--shiki-dark:#D4D4D4">(node, file);</span></span>
<span class="line"><span style="color:#000000;--shiki-dark:#D4D4D4">    }</span></span>
<span class="line"><span style="color:#000000;--shiki-dark:#D4D4D4">}</span></span></code></pre>`,
      },
      {
        type: 'paragraph',
        content:
          'This runs once per file, per tree build. Every call to /api/files walks the filesystem and enriches each node individually. The fallback path reads OS-level attributes:',
      },
      {
        type: 'code',
        language: 'java',
        filename: 'FileServingService.java',
        content: `<pre class="shiki shiki-themes light-plus dark-plus" style="background-color:#FFFFFF;--shiki-dark-bg:#1E1E1E;color:#000000;--shiki-dark:#D4D4D4" tabindex="0"><code><span class="line"><span style="color:#0000FF;--shiki-dark:#569CD6">private</span><span style="color:#267F99;--shiki-dark:#4EC9B0"> void</span><span style="color:#795E26;--shiki-dark:#DCDCAA"> populateNodeFromFileSystem</span><span style="color:#000000;--shiki-dark:#D4D4D4">(</span><span style="color:#267F99;--shiki-dark:#4EC9B0">FileTreeNode</span><span style="color:#000000;--shiki-dark:#D4D4D4"> node, </span><span style="color:#267F99;--shiki-dark:#4EC9B0">File</span><span style="color:#000000;--shiki-dark:#D4D4D4"> file) {</span></span>
<span class="line"><span style="color:#AF00DB;--shiki-dark:#C586C0">    try</span><span style="color:#000000;--shiki-dark:#D4D4D4"> {</span></span>
<span class="line"><span style="color:#267F99;--shiki-dark:#4EC9B0">        BasicFileAttributes</span><span style="color:#001080;--shiki-dark:#9CDCFE"> attrs</span><span style="color:#000000;--shiki-dark:#D4D4D4"> = </span><span style="color:#001080;--shiki-dark:#9CDCFE">Files</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">readAttributes</span><span style="color:#000000;--shiki-dark:#D4D4D4">(</span><span style="color:#001080;--shiki-dark:#9CDCFE">file</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">toPath</span><span style="color:#000000;--shiki-dark:#D4D4D4">(), </span><span style="color:#001080;--shiki-dark:#9CDCFE">BasicFileAttributes</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#001080;--shiki-dark:#9CDCFE">class</span><span style="color:#000000;--shiki-dark:#D4D4D4">);</span></span>
<span class="line"><span style="color:#267F99;--shiki-dark:#4EC9B0">        LocalDateTime</span><span style="color:#001080;--shiki-dark:#9CDCFE"> created</span><span style="color:#000000;--shiki-dark:#D4D4D4"> = </span><span style="color:#001080;--shiki-dark:#9CDCFE">LocalDateTime</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">ofInstant</span><span style="color:#000000;--shiki-dark:#D4D4D4">(</span></span>
<span class="line"><span style="color:#001080;--shiki-dark:#9CDCFE">                attrs</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">creationTime</span><span style="color:#000000;--shiki-dark:#D4D4D4">().</span><span style="color:#795E26;--shiki-dark:#DCDCAA">toInstant</span><span style="color:#000000;--shiki-dark:#D4D4D4">(),</span></span>
<span class="line"><span style="color:#001080;--shiki-dark:#9CDCFE">                ZoneId</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">systemDefault</span><span style="color:#000000;--shiki-dark:#D4D4D4">());</span></span>
<span class="line"><span style="color:#267F99;--shiki-dark:#4EC9B0">        LocalDateTime</span><span style="color:#001080;--shiki-dark:#9CDCFE"> modified</span><span style="color:#000000;--shiki-dark:#D4D4D4"> = </span><span style="color:#001080;--shiki-dark:#9CDCFE">LocalDateTime</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">ofInstant</span><span style="color:#000000;--shiki-dark:#D4D4D4">(</span></span>
<span class="line"><span style="color:#001080;--shiki-dark:#9CDCFE">                attrs</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">lastModifiedTime</span><span style="color:#000000;--shiki-dark:#D4D4D4">().</span><span style="color:#795E26;--shiki-dark:#DCDCAA">toInstant</span><span style="color:#000000;--shiki-dark:#D4D4D4">(),</span></span>
<span class="line"><span style="color:#001080;--shiki-dark:#9CDCFE">                ZoneId</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">systemDefault</span><span style="color:#000000;--shiki-dark:#D4D4D4">());</span></span>
<span class="line"><span style="color:#001080;--shiki-dark:#9CDCFE">        node</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">setCreatedDate</span><span style="color:#000000;--shiki-dark:#D4D4D4">(</span><span style="color:#001080;--shiki-dark:#9CDCFE">created</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">format</span><span style="color:#000000;--shiki-dark:#D4D4D4">(DATE_FORMATTER));</span></span>
<span class="line"><span style="color:#001080;--shiki-dark:#9CDCFE">        node</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">setLastModified</span><span style="color:#000000;--shiki-dark:#D4D4D4">(</span><span style="color:#001080;--shiki-dark:#9CDCFE">modified</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">format</span><span style="color:#000000;--shiki-dark:#D4D4D4">(DATE_FORMATTER));</span></span>
<span class="line"><span style="color:#001080;--shiki-dark:#9CDCFE">        node</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">setOwnerName</span><span style="color:#000000;--shiki-dark:#D4D4D4">(FALLBACK_OWNER);</span></span>
<span class="line"><span style="color:#000000;--shiki-dark:#D4D4D4">    } </span><span style="color:#AF00DB;--shiki-dark:#C586C0">catch</span><span style="color:#000000;--shiki-dark:#D4D4D4"> (</span><span style="color:#267F99;--shiki-dark:#4EC9B0">IOException</span><span style="color:#001080;--shiki-dark:#9CDCFE"> e</span><span style="color:#000000;--shiki-dark:#D4D4D4">) {</span></span>
<span class="line"><span style="color:#001080;--shiki-dark:#9CDCFE">        node</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">setCreatedDate</span><span style="color:#000000;--shiki-dark:#D4D4D4">(</span><span style="color:#A31515;--shiki-dark:#CE9178">"Unknown"</span><span style="color:#000000;--shiki-dark:#D4D4D4">);</span></span>
<span class="line"><span style="color:#001080;--shiki-dark:#9CDCFE">        node</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">setOwnerName</span><span style="color:#000000;--shiki-dark:#D4D4D4">(FALLBACK_OWNER);</span></span>
<span class="line"><span style="color:#000000;--shiki-dark:#D4D4D4">    }</span></span>
<span class="line"><span style="color:#000000;--shiki-dark:#D4D4D4">}</span></span></code></pre>`,
      },
      {
        type: 'paragraph',
        content:
          'This design means no file is ever invisible. Anything on disk shows up. Files uploaded through the API get full metadata. Files placed externally get degraded metadata, owner shows "system" instead of a username, but they still render. The two populations look identical in the UI except for that one field.',
      },
      {
        type: 'paragraph',
        content:
          'The part I\'m least satisfied with is what happens when the database write fails during upload. A file can be successfully copied to disk and then fail to get a metadata row. The user sees a successful upload. The file appears in the tree on the next refresh. But it has no owner, no history record, no version tracking. It just silently falls into the filesystem-only fallback path. The code catches the exception and continues:',
      },
      {
        type: 'code',
        language: 'java',
        filename: 'FileServingService.java',
        content: `<pre class="shiki shiki-themes light-plus dark-plus" style="background-color:#FFFFFF;--shiki-dark-bg:#1E1E1E;color:#000000;--shiki-dark:#D4D4D4" tabindex="0"><code><span class="line"><span style="color:#000000;--shiki-dark:#D4D4D4">} </span><span style="color:#AF00DB;--shiki-dark:#C586C0">catch</span><span style="color:#000000;--shiki-dark:#D4D4D4"> (</span><span style="color:#267F99;--shiki-dark:#4EC9B0">Exception</span><span style="color:#001080;--shiki-dark:#9CDCFE"> e</span><span style="color:#000000;--shiki-dark:#D4D4D4">) {</span></span>
<span class="line"><span style="color:#008000;--shiki-dark:#6A9955">    // Log error but don't fail the request if just DB fails, or should i?</span></span>
<span class="line"><span style="color:#008000;--shiki-dark:#6A9955">    // For now just log print stack trace as before for DB errors,</span></span>
<span class="line"><span style="color:#008000;--shiki-dark:#6A9955">    // BUT if the file copy itself failed, i want to capture that in history if</span></span>
<span class="line"><span style="color:#008000;--shiki-dark:#6A9955">    // possible (though i might not have a file record yet).</span></span>
<span class="line"><span style="color:#001080;--shiki-dark:#9CDCFE">    System</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#001080;--shiki-dark:#9CDCFE">err</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">println</span><span style="color:#000000;--shiki-dark:#D4D4D4">(</span><span style="color:#A31515;--shiki-dark:#CE9178">"Failed to save DB metadata for: "</span><span style="color:#000000;--shiki-dark:#D4D4D4"> + originalFilename);</span></span>
<span class="line"><span style="color:#001080;--shiki-dark:#9CDCFE">    e</span><span style="color:#000000;--shiki-dark:#D4D4D4">.</span><span style="color:#795E26;--shiki-dark:#DCDCAA">printStackTrace</span><span style="color:#000000;--shiki-dark:#D4D4D4">();</span></span>
<span class="line"><span style="color:#000000;--shiki-dark:#D4D4D4">}</span></span></code></pre>`,
      },
      {
        type: 'paragraph',
        content:
          'That comment has been in the code since the initial database integration commit, which I pushed with the message "initial database init and tables created, also added tracking metadata in methods, not ready for merge into main." The "or should i?" is the actual decision I never resolved. I chose to prioritize the file operation succeeding over metadata consistency, because for a self-hosted file storage app, losing the file is worse than losing the record of the file. But I don\'t love it.',
      },
      {
        type: 'paragraph',
        content:
          'There are other gaps I know about. The listFiles method, which powers the older flat-listing endpoint, uses pure filesystem with zero metadata enrichment. The getDirectoryTree method, which powers the current tree view, uses the dual-source approach. Two listing paths in the same service class, two different metadata strategies. Directory deletion calls recordDeletion for the top-level directory but doesn\'t cascade to clean up FileMetadata rows for files that were inside it. Those orphaned rows accumulate in the database, pointing to paths that no longer exist on disk, and nothing ever cleans them up.',
      },
      {
        type: 'paragraph',
        content:
          'There\'s also an N+1 query problem hiding in plain sight. populateNodeMetadata calls fileMetadataRepository.findByPath(currentPath) once per node. A directory with 200 files fires 200 individual SELECT queries during a single tree build. A batch query, something like findByPathIn(Set<String> paths), would collapse that to one round trip. I haven\'t done it because the current query count hasn\'t caused visible latency at the scale I use the app. It will if the directory grows.',
      },
      {
        type: 'paragraph',
        content:
          'The right next step is probably a lightweight reconciliation on boot: walk the filesystem, flag any FileMetadata rows whose paths don\'t resolve to real files, create stub rows for files on disk that have no metadata. Not a full bidirectional sync, just enough to narrow the gap between the two sources over time. I haven\'t built it because the current approach works well enough for one user on one machine. But "works well enough" is the kind of thing that ages poorly, and I\'d rather have written it down here than discover it later.',
      },
    ],
  },
];
