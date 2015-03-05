cmd /c protractor protractorConfig.js --params.testEnv=%1 --capabilities.maxInstances=99 --capabilities.browserName="%2" --capabilities.shardTestFiles=true --specs="tests\MyTestName\all.pro.reset.js"
cmd /c protractor protractorConfig.js --params.testEnv=%1 --capabilities.maxInstances=99 --capabilities.browserName="%2" --capabilities.shardTestFiles=true --specs="tests\MyTestName\all.pro.setup.js"
cmd /c protractor protractorConfig.js --params.testEnv=%1 --capabilities.maxInstances=99 --capabilities.browserName="%2" --capabilities.shardTestFiles=true --specs="tests\MyTestName\*.pro.js"
cmd /c protractor protractorConfig.js --params.testEnv=%1 --capabilities.maxInstances=99 --capabilities.browserName="%2" --capabilities.shardTestFiles=true --specs="tests\MyTestName\all.pro.reset.js"
