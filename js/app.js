var schema = "";
var hints = {
  home:
    "This is an interactive guide for exploring various important properties of the <a href='http://composer.json.jolicode.com/'>composer.json</a> file from <a href='http://getcomposer.org'>Composer</a>. <br/> <br/> You can access information about properties by <strong>mousing over</strong>.",
  name:
    "<p>The name of the package. It consists of vendor name and project name, separated by <code>/</code>.</p><br /><br />Examples:<br /><br />monolog/monolog<br />igorw/event-source<br />Required for published packages (libraries).",
  description:
    "A short description of the package. Usually this is just one line long.<br /><br />Required for published packages (libraries).",
  version:
    "This must follow the format of <code>X.Y.Z</code> with an optional suffix of <code>-dev</code>, <code>alphaN</code>, <code>-betaN</code> or <code>-RCN</code>.<br /><br />Examples:<br /><br /><pre><code>1.0.0<br />1.0.2<br />1.1.0<br />0.2.5<br />1.0.0-dev<br />1.0.0-beta2<br />1.0.0-RC5<br /><br /></code></pre>Optional if the package repository can infer the version from somewhere, such as the VCS tag name in the VCS repository. In that case it is also recommended to omit it.",
  type:
    "<p>Package types are used for custom installation logic. If you have a package that needs some special logic, you can define a custom type. This could be a <code>symfony-bundle</code>, a <code>wordpress-plugin</code> or a <code>typo3-module</code>. These types will all be specific to certain projects, and they will need to provide an installer capable of installing packages of that type.</p>",
  keywords:
    "An array of keywords that the package is related to. These can be used for searching and filtering.",
  homepage: "An URL to the website of the project.",
  time:
    "Release date of the version.<br />Must be in <code>YYYY-MM-DD</code>, <code>YYYY-MM-DD HH:MM:SS</code> or <code>YYYY-MM-DDTHH:MM:SSZ</code> format.",
  license:
    "The license of the package. This can be either a string or an array of strings.<br />The recommended notation for the most common licenses is (alphabetical):<br /><code>Apache-2.0<br />BSD-2-Clause<br />BSD-3-Clause<br />BSD-4-Clause<br />GPL-2.0<br />GPL-2.0+<br />GPL-3.0<br />GPL-3.0+<br />LGPL-2.1<br />LGPL-2.1+<br />LGPL-3.0<br />LGPL-3.0+<br />MIT</code><br />For closed-source software, you may use <code>proprietary</code> as the license identifier.",
  authors: "The authors of the package. This is an array of objects.",
  "authors-name": "The author's name. Usually his real name.",
  "authors-email": "The author's email address.",
  "authors-homepage": "An URL to the author's website.",
  "authors-role":
    "The authors' role in the project (e.g. developer or translator)",
  support: "Various information to get support about the project.",
  "support-email": "Email address for support.",
  "support-issues": "URL to the Issue Tracker.",
  "support-forum": "URL to the Forum.",
  "support-wiki": "URL to the Wiki.",
  "support-irc": "IRC channel for support, as irc://server/channel.",
  "support-source": "URL to browse or download the sources.",
  "support-docs": "URL to the documentation.",
  require:
    'Lists packages required by this package. The package will not be installed unless those requirements can be met.<br />It take an object which maps package names to <a href="https://getcomposer.org/doc/01-basic-usage.md#package-versions">version constraints</a>. <br/><code>require</code> and <code>require-dev</code> additionally support stability flags (root-only). These allow you to further restrict or expand the stability of a package beyond the scope of the <a href="http://getcomposer.org/doc/#minimum-stability">minimum-stability</a> setting. You can apply them to a constraint, or just apply them to an empty constraint if you want to allow unstable packages of a dependency\'s dependency for example.<br /><code>require</code> and <code>require-dev</code> additionally support explicit references (i.e. commit) for dev versions to make sure they are blocked to a given state, even when you run update. These only work if you explicitly require a dev version and append the reference with <code>#&lt;ref&gt;</code>.<br /><br />Examples:<br /><br /><pre><code><br /><span class="key">"vendor/package": </span> "1.3.2", <br />// exactly 1.3.2<br /><span class="key">"vendor/package": </span> "&gt=1.3.2", <br />// anything above or equal to 1.3.2<br /><span class="key">"vendor/package": </span> "&lt1.3.2", <br />// anything below 1.3.2<br /><span class="key">"vendor/package": </span> "1.3.*", <br />// &gt=1.3.0 &lt1.4.0<br /><span class="key">"vendor/package": </span> "~1.3.2", <br />// &gt=1.3.2 &lt1.4.0<br /><span class="key">"vendor/package": </span> "~1.3", <br />// &gt=1.3.0 &lt2.0.0<br /><span class="key">"vendor/package": </span> "^1.3.2", <br />// &gt=1.3.2 &lt2.0.0<br /><span class="key">"vendor/package": </span> "^0.3.2", <br />// &gt=0.3.2 &lt0.4.0 // except if major version is 0 <br /><br />&gt, &lt, &gt=, &lt= specify upper / lower bounds<br />* wildcard<br />~ allows last digit specified to go up<br />^ doesn\'t allow breaking changes</code></pre>',
  "require-dev":
    'Lists packages required for developing this package, or running tests, etc. The dev requirements of the root package only will be installed if <code>install</code> or <code>update</code> is ran with <code>--dev</code>.<br />Packages listed here and their dependencies can not overrule the resolution found with the packages listed in require. This is even true if a different version of a package would be installable and solve the conflict. The reason is that <code>install --dev</code> produces the exact same state as just <code>install</code>, apart from the additional dev packages.<br />If you run into such a conflict, you can specify the conflicting package in the require section and require the right version number to resolve the conflict.<br /><br />Examples:<br /><br /><pre><code><br /><span class="key">"vendor/package": </span> "1.3.2", <br />// exactly 1.3.2<br /><span class="key">"vendor/package": </span> "&gt=1.3.2", <br />// anything above or equal to 1.3.2<br /><span class="key">"vendor/package": </span> "&lt1.3.2", <br />// anything below 1.3.2<br /><span class="key">"vendor/package": </span> "1.3.*", <br />// &gt=1.3.0 &lt1.4.0<br /><span class="key">"vendor/package": </span> "~1.3.2", <br />// &gt=1.3.2 &lt1.4.0<br /><span class="key">"vendor/package": </span> "~1.3", <br />// &gt=1.3.0 &lt2.0.0<br /><span class="key">"vendor/package": </span> "^1.3.2", <br />// &gt=1.3.2 &lt2.0.0<br /><span class="key">"vendor/package": </span> "^0.3.2", <br />// &gt=0.3.2 &lt0.4.0 // except if major version is 0 <br /><br />&gt, &lt, &gt=, &lt= specify upper / lower bounds<br />* wildcard<br />~ allows last digit specified to go up<br />^ doesn\'t allow breaking changes</code></pre>',
  conflict:
    "Lists packages that conflict with this version of this package. They will not be allowed to be installed together with your package.",
  replace:
    "Lists packages that are replaced by this package. This allows you to fork a package, publish it under a different name with its own version numbers, while packages requiring the original package continue to work with your fork because it replaces the original package.<br /><br />This is also useful for packages that contain sub-packages, for example the main symfony/symfony package contains all the Symfony Components which are also available as individual packages. If you require the main package it will automatically fulfill any requirement of one of the individual components, since it replaces them.<br /><br />Caution is advised when using replace for the sub-package purpose explained above. You should then typically only replace using <code>self.version</code> as a version constraint, to make sure the main package only replaces the sub-packages of that exact version, and not any other version, which would be incorrect.",
  provide:
    "List of other packages that are provided by this package. This is mostly useful for common interfaces. A package could depend on some virtual <code>logger</code> package, any library that implements this logger interface would simply list it in <code>provide</code>.",
  suggest:
    "Suggested packages that can enhance or work well with this package. These are just informational and are displayed after the package is installed, to give your users a hint that they could add more packages, even though they are not strictly required.<br />The format is like package links above, except that the values are free text and not version constraints.",
  autoload:
    'Autoload mapping for a PHP autoloader.<br/><br/>Currently <a href="http://www.php-fig.org/psr/psr-4/">PSR-4</a> autoloading, <a href="https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md">PSR-0</a> autoloading, classmap generation and files are supported. PSR-4 is the recommended way though since it offers greater ease of use (no need to regenerate the autoloader when you add classes).<br /><br />Under the <code>psr-4</code> key you define a mapping from namespaces to paths, relative to the package root. When autoloading a class like <code>Foo\\Bar\\Baz</code> a namespace prefix <code>Foo\\</code> pointing to a directory <code>src/</code> means that the autoloader will look for a file named <code>src/Bar/Baz.php</code> and include it if present. Note that as opposed to the older PSR-0 style, the prefix (<code>Foo\\</code>) is not present in the file path.<br /><br />Under the <code>psr-0</code> key you define a mapping from namespaces to paths, relative to the package root. Note that this also supports the PEAR-style non-namespaced convention.',
  "autoload-dev":
    'Same as "autoload", but only considered in development mode.',
  "target-dir":
    "DEPRECATED: Defines the installation target.<br /><br />In case the package root is below the namespace declaration you cannot autoload properly. target-dir solves this problem.<br /><br />An example is Symfony. There are individual packages for the components. The Yaml component is under <code>Symfony\\Component\\Yaml</code>. The package root is that Yaml directory. To make autoloading possible, we need to make sure that it is not installed into <code>vendor/symfony/yaml</code>, but instead into <code>vendor/symfony/yaml/Symfony/Component/Yaml</code>, so that the autoloader can load it from <code>vendor/symfony/yaml</code>.",
  "minimum-stability":
    "This defines the default behavior for filtering packages by stability. This defaults to <code>stable</code>, so if you rely on a <code>dev</code> package, you should specify it in your file to avoid surprises.<br />All versions of each package are checked for stability, and those that are less stable than the <code>minimum-stability</code> setting will be ignored when resolving your project dependencies. Specific changes to the stability requirements of a given package can be done in <code>require</code> or <code>require-dev</code>.Available options are <code>dev</code>, <code>alpha</code>, <code>beta</code>, <code>RC</code>, and <code>stable</code>.",
  repositories:
    "Custom package repositories to use.<br />By default composer just uses the packagist repository. By specifying repositories you can get packages from elsewhere.",
  "repositories-composer":
    'The main repository type is the <code>composer</code> repository. It uses a single <code>packages.json</code> file that contains all of the package metadata.<br />This is also the repository type that packagist uses. To reference a <code>composer</code> repository, just supply the path before the <code>packages.json</code> file. In case of packagist, that file is located at <code>/packages.json</code>, so the URL of the repository would be <code>packagist.org</code>. For <code>example.org/packages.json</code> the repository URL would be <code>example.org</code>.<br/>See the <a href="http://getcomposer.org/doc/05-repositories.md#composer">full documentation</a>.',
  "repositories-vcs":
    'VCS stands for version control system. This includes versioning systems like git, svn or hg. Composer has a repository type for installing packages from these systems.<br/>See the <a href="http://getcomposer.org/doc/05-repositories.md#vcs">full documentation</a>.',
  "repositories-pear":
    'It is possible to install packages from any PEAR channel by using the <code>pear</code> repository. Composer will prefix all package names with <code>pear-{channelName}/</code> to avoid conflicts. All packages are also aliased with prefix <code>pear-{channelAlias}/</code>.<br/>See the <a href="http://getcomposer.org/doc/05-repositories.md#pear">full documentation</a>.',
  "repositories-package":
    'If you want to use a project that does not support composer through any of the means above, you still can define the package yourself by using a <code>package</code> repository.<br />Basically, you define the same information that is included in the <code>composer</code> repository\'s <code>packages.json</code>, but only for a single package. Again, the minimum required fields are <code>name</code>, <code>version</code>, and either of <code>dist</code> or <code>source</code>.<br/>See the <a href="http://getcomposer.org/doc/05-repositories.md#package">full documentation</a>.',
  "repositories-artifact":
    'There are some cases, when there is no ability to have one of the previously mentioned repository types online, even the VCS one. Typical example could be cross-organisation library exchange through built artifacts. Of course, most of the times they are private. To simplify maintenance, one can simply use a repository of type <code>artifact</code> with a folder containing ZIP archives of those private packages.<br/>See the <a href="http://getcomposer.org/doc/05-repositories.md#artifact">full documentation</a>.',
  "repositories-path":
    'In addition to the artifact repository, you can use the path one, which allows you to depend on a relative directory. This can be especially useful when dealing with monolith repositories.<br/>See the <a href="http://getcomposer.org/doc/05-repositories.md#path">full documentation</a>.',
  "repositories-disabling-packagist":
    'You can disable the default Packagist.org repository by adding this to your <code>composer.json</code>.<br/>See the <a href="https://getcomposer.org/doc/05-repositories.md#disabling-packagist-org">full documentation</a>.',
  config: "A set of configuration options. It is only used for projects.",
  "config-vendor-dir": "The location where all packages are installed.",
  "config-bin-dir": "The location where all binaries are linked.",
  "config-process-timeout":
    "The timeout in seconds for process executions, defaults to 300 (5mins).",
  "config-notify-on-install":
    "Composer allows repositories to define a notification URL, so that they get notified whenever a package from that repository is installed. This option allows you to disable that behaviour.",
  "config-github-protocols":
    "A list of protocols to use for github.com clones, in priority order.",
  "config-use-include-path":
    "If true, the Composer autoloader will also look for classes in the PHP include path.",
  "config-preferred-install":
    "Can be any of <code>source</code>, <code>dist</code> or <code>auto</code>. This option allows you to set the install method Composer will prefer to use.",
  "config-github-oauth":
    "A list of domain names and oauth keys. Oauthtoken is used to access private repositories on github and to circumvent the low IP-based rate limiting of their API.",
  "config-gitlab-oauth":
    "A list of domain names and oauth keys. Oauthtoken is used to access private repositories on gitlab.",
  "config-github-domains":
    'A list of domains to use in github mode. This is used for GitHub Enterprise setups, defaults to ["github.com"].',
  "config-gitlab-domains": "A list of domains to use in gitlab mode.",
  "config-disable-tls":
    "If set to true all HTTPS URLs will be tried with HTTP instead and no network level encryption is performed. Enabling this is a security risk and is NOT recommended. The better way is to enable the php_openssl extension in php.ini.",
  "config-cafile":
    "Location of Certificate Authority file on local filesystem. In PHP 5.6+ you should rather set this via openssl.cafile in php.ini, although PHP 5.6+ should be able to detect your system CA file automatically.",
  "config-capath":
    "If cafile is not specified or if the certificate is not found there, the directory pointed to by capath is searched for a suitable certificate. capath must be a correctly hashed certificate directory.",
  "config-http-basic":
    'A hash of domain name => {"username": "...", "password": "..."}.',
  "config-platform":
    "Lets you fake platform packages (PHP and extensions) so that you can emulate a production env or define your target platform in the config.",
  "config-store-auths":
    'What to do after prompting for authentication, one of: true (store), false (do not store) or "prompt" (ask every time), defaults to prompt.',
  "config-cache-dir":
    'Stores all the caches used by composer. See also <a href="http://getcomposer.org/doc/03-cli.md#composer-home">COMPOSER_HOME</a>.',
  "config-data-dir":
    "Defaults to <code>C:UsersUserAppDataRoamingComposer</code> on Windows, $XDG_DATA_HOME/composer on unix systems that follow the XDG Base Directory Specifications, and $home on other unix systems. Right now it is only used for storing past composer.phar files to be able to rollback to older versions.",
  "config-cache-files-dir": "Stores the zip archives of packages.",
  "config-cache-repo-dir":
    "Stores repository metadata for the composer type and the VCS repos of type svn, github and bitbucket.",
  "config-cache-vcs-dir":
    "Stores VCS clones for loading VCS repository metadata for the git/hg types and to speed up installs.",
  "config-cache-files-ttl":
    "Composer caches all dist (zip, tar, ...) packages that it downloads. Those are purged after six months of being unused by default. This option allows you to tweak this duration (in seconds) or disable it completely by setting it to 0.",
  "config-cache-files-maxsize":
    "Composer caches all dist (zip, tar, ...) packages that it downloads. When the garbage collection is periodically ran, this is the maximum size the cache will be able to use. Older (less used) files will be removed first until the cache fits.",
  "config-bin-compat":
    "Defaults to <code>auto</code>. Determines the compatibility of the binaries to be installed. If it is auto then Composer only installs .bat proxy files when on Windows. If set to <code>full</code> then both .bat files for Windows and scripts for Unix-based operating systems will be installed for each binary. This is mainly useful if you run Composer inside a linux VM but still want the .bat proxies available for use in the Windows host OS.",
  "config-discard-changes":
    "Can be any of <code>true</code>, <code>false</code> or <code>stash</code>. This option allows you to set the default style of handling dirty updates when in non-interactive mode. true will always discard changes in vendors, while <code>stash</code> will try to stash and reapply. Use this for CI servers or deploy scripts if you tend to have modified vendors.",
  "config-autoloader-suffix":
    "Optional string to be used as a suffix for the generated Composer autoloader. When null a random one will be generated.",
  "config-optimize-autoloader": "Always optimize when dumping the autoloader.",
  "config-prepend-autoloader":
    "If false, the composer autoloader will not be prepended to existing autoloaders, defaults to true.",
  "config-sort-packages":
    "Defaults to false. If true, the require command keeps packages sorted by name in <code>composer.json</code> when adding a new package.",
  "config-classmap-authoritative":
    "Defaults to false. If true, the Composer autoloader will only load classes from the classmap. Implies optimize-autoloader.",
  "config-github-expose-hostname":
    "Defaults to true. If false, the OAuth tokens created to access the github API will have a date instead of the machine hostname.",
  "config-archive-format":
    "Defaults to tar. Composer allows you to add a default archive format when the workflow needs to create a dedicated archiving format.",
  "config-archive-dir":
    "Defaults to .. Composer allows you to add a default archive directory when the workflow needs to create a dedicated archiving format. Or for easier development between modules.",
  scripts:
    'Composer allows you to hook into various parts of the installation process through the use of scripts.<br />A script is a callback (defined as a static method) or a shell command that will be called when the event it listens on is triggered.<br/> Let\'s take a look to the full list of <a href="http://getcomposer.org/doc/articles/scripts.md#event-types">Event Types</a>.',
  extra:
    "Arbitrary extra data for consumption by <code>scripts</code>.<br />This can be virtually anything. To access it from within a script event handler, you can do:<br /><pre><code>$extra = $event-&gt;getComposer()-&gt;getPackage()-&gt;getExtra();</code></pre>",
  bin:
    "A set of files that should be treated as binaries and symlinked into the <code>bin-dir</code> (from config).",
  archive:
    "Options for creating package archives.<br />The example will include <code>/dir/foo/bar/file</code>, <code>/foo/bar/baz</code>, <code>/file.php</code>, <code>/foo/my.test</code> but it will exclude <code>/foo/bar/any</code>, <code>/foo/baz</code>, and <code>/my.test</code>.",
  "prefer-stable":
    "When this is enabled, Composer will prefer more stable packages over unstable ones when finding compatible stable packages is possible. If you require a dev version or only alphas are available for a package, those will still be selected granted that the minimum-stability allows for it.",
  "phar-about": "Short information about Composer.",
  "phar-archive": "Create an archive of this composer package.",
  "phar-browse":
    "Aliased to <code>home</code>, opens the package's repository URL or homepage in your browser.",
  "phar-clear-cache":
    "Aliased to <code>clearcache</code>, clears composer's internal package cache.",
  "phar-config":
    "Allows you to edit some basic composer settings in either the local <code>composer.json</code> file or the global config.json file.",
  "phar-create-project":
    "Create new project from a package into given directory.",
  "phar-depends":
    "Tell you which other packages depend on a certain package. You can specify which link types (require, require-dev) should be included in the listing. By default both are used.",
  "phar-dump-autoload":
    'If you need to update the autoloader because of new classes in a classmap package for example, you can use "dump-autoload" to do that without having to go through an install or update.<br /><br />Use <b>--optimize</b> to convert PSR-0/4 autoloading to classmap to get a faster autoloader. <strong>This is strongly recommended for production (you can get a 20% boost)</strong>, but can take a bit of time to run so it is currently not done by default.<br/><br/>You can also use the <code>dumpautoload</code> alias.',
  "phar-diagnose":
    "If you think you found a bug, or something is behaving strangely, you might want to run the diagnose command to perform automated checks for many common problems.",
  "phar-exec": "Execute a vendored binary/script.",
  "phar-help":
    "Display help for all the other commands: <code>composer help install</code>.",
  "phar-global":
    "The global command allows you to run other commands like <code>install</code>, <code>require</code> or <code>update</code> as if you were running them from the <code>COMPOSER_HOME</code> directory.<br /><br />This can be used to install CLI utilities globally and if you add <code>$COMPOSER_HOME/vendor/bin</code> to your <code>$PATH</code> environment variable.<br /><code>$ composer global require friendsofphp/php-cs-fixer</code><br />Now the <code>php-cs-fixer</code> binary is available globally (assuming you adjusted your PATH).",
  "phar-init":
    "Creates a basic <code>composer.json</code> file in current directory.<br/><br/>When you run the command it will interactively ask you to fill in the fields, while using some smart defaults.",
  "phar-install":
    "Parses the <code>composer.json</code> file and downloads the needed dependencies.<br/><br/>The <code>install</code> command reads the <code>composer.json</code> file from the current directory, resolves the dependencies, and installs them into <code>vendor</code>.<br/>If there is no <code>composer.lock</code> file, composer will create one after dependency resolution. The <code>--no-scripts</code> option is useful to bypass the configured pre and post scripts.<br/><br/>When a <code>composer.lock</code> file is present installs the exact package versions listed in <code>composer.lock</code> to ensure that they are consistent for everyone.<br/><br/>Committing <code>composer.lock</code> to VC is important because it will cause anyone who sets up the project to use the exact same versions of the dependencies that you are using.",
  "phar-info": "Show information about packages.",
  "phar-licenses": "Show information about licenses of dependencies.",
  "phar-list": "Lists commands",
  "phar-outdated":
    "Shows a list of installed packages that have updates available (with colors!), including their current and latest versions. <br><ul><li>Green: The package is up to date!</li><li>Yellow: There's a new version, but possibly with BC break, there may be some work to install the new version.</li><li>Red: There should be no BC break (semver), you should upgrade the package.</li></ul>",
  "phar-prohibits":
    "Tells you which packages are blocking a given package from being installed.",
  "phar-remove":
    "Removes a package from the require or require-dev: <code>remove vendor/package vendor/package2</code>.",
  "phar-require":
    "Adds required packages to your <code>composer.json</code> and installs them.<br /><br/>The <code>require</code> command adds new packages to the <code>composer.json</code> file from the current directory.<br/>After adding/changing the requirements, the modified requirements will be installed or updated.",
  "phar-run-script":
    "Run the scripts manually, just give it the script name and optionally <code>--no-dev</code> to disable the dev mode.",
  "phar-search":
    "Search for packages.<br /><br />The search command allows you to search through the current project's package repositories. Usually, this will be just packagist. You simply pass it the terms you want to search for.",
  "phar-self-update":
    "Updates <code>composer.phar</code> to the lastest version.<br/><br/>Running the <code>self-update</code> command could solve some problems and save you some time too.<br/><br/>You can also use the <code>selfupdate</code> alias.",
  "phar-show":
    "List all of the available packages, you can use the show command like this <code>show -v symfony/symfony</code> to list the available versions.",
  "phar-status":
    "If you often need to modify the code of your dependencies and they are installed from source, the status command allows you to check if you have local changes in any of them.",
  "phar-suggests":
    "Lists all packages suggested by currently installed set of packages. You can optionally pass one or multiple package names in the format of <code>vendor/package</code> to limit output to suggestions made by those packages only.",
  "phar-update":
    "Updates your dependencies to the latest version, and updates the <code>composer.lock</code> file.<br/><br/>In order to get the latest versions of the dependencies and to update the <code>composer.lock</code> file, you should use the <code>update</code> command.<br/>This will resolve all dependencies of the project and write the exact versions into <code>composer.lock</code>.",
  "phar-update-lock":
    'Sometimes, you might get this warning:<br /><pre><code style="word-break: initial;">Warning: The lock file is not up to date with the latest changes in composer.json, you may be getting outdated dependencies, run update to update them.</code></pre>This could happen after you manually edited the <code>composer.json</code> (add or change the <code>description</code>, <code>authors</code>, <code>extra</code> config, etc). Even if your changes are meaningless for Composer, it detects that the <strong>md5sum</strong> of the file changed so it warns you that these modifications are not currently taken into account in the <code>composer.lock</code> file.<br/><br/>So to suppress this warning, you can just run the <code>update --lock</code> command to update the lock file <strong>without upgrading</strong> any vendors.',
  "phar-validate":
    "Validates a composer.json.<br/><br/>You should always run the <code>validate</code> command before you commit your <code>composer.json</code> file, and before you tag a release. It will check if your <code>composer.json</code> is valid."
};

$(document).ready(function() {
  $.get(
    "composer-schema.json",
    function(data) {
      schema = data;
    },
    "json"
  );

  $(".hint").html(hints["home"]);

  $(".composer .pair").mouseover(function(e) {
    var el = this;
    var topPx = $("#header").height() + 61;
    if ($(document).scrollTop() >= topPx) {
      topPx = $(document).scrollTop();
    }

    $(".doc").css("top", topPx + "px");

    var key, title;

    if (undefined != $(".key", el).attr("data-key")) {
      key = $(".key", el).attr("data-key");
    }
    if (undefined != $(".key", el).attr("data-title")) {
      title = $(".key", el).attr("data-title");
    }

    if (!key || !title) {
      var prefix =
        undefined != $(".key", el).attr("data-prefix")
          ? $(".key", el).attr("data-prefix")
          : "";

      if (!title) {
        title = $(".key", el)
          .html()
          .replace(/"/g, "");
      }
      if (!key) {
        key = prefix + title;
      }
    }

    $(".title").html(title);
    if (schema && undefined != schema["properties"][key]) {
      var typeData = "";
      if (undefined != schema["properties"][key]["type"]) {
        typeData = schema["properties"][key]["type"];
        if (typeData.constructor.toString().indexOf("Array") > -1) {
          typeData = typeData.join(", ");
        }
      }
      $(".type").html(typeData);
    } else {
      $(".type").html("");
    }

    $(".hint").html(hints[key]);
  });
});