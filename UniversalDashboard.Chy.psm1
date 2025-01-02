#$IndexJs = Get-ChildItem "C:\Workspace\epicor-chrysalis-psu-cc\dist\chy.*.bundle.js"   # Use for testing only
$IndexJs = Get-ChildItem "$PSScriptRoot\dist\chy.*.bundle.js"
$AssetId = [UniversalDashboard.Services.AssetService]::Instance.RegisterAsset($IndexJs.FullName)

function New-ChyTextField {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$Value,
        [Parameter()]
        [string]$Placeholder,
        [Parameter()]
        [switch]$FullWidth
    )

    @{
        assetId = $AssetId 
        isPlugin = $true 
        type = "chytextfield"
        id = $Id

        value = $Value
        placeholder = $Placeholder 
        fullWidth = $FullWidth.IsPresent
    }
}

function New-ChyButton {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$Text,
        [Parameter()]
        [Endpoint]$OnClick
    )

    $OnClick.Register($Id, $PSCmdlet)

    @{
        assetId = $AssetId 
        isPlugin = $true 
        type = "chybutton"
        id = $Id

        text = $Text
        onClick = $OnClick
    }
}

function New-ChyList {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [ScriptBlock]$Content
    )

    @{
        assetId = $AssetId 
        isPlugin = $true 
        type = "chylist"
        id = $Id

        children = & $Content
    }
}

function New-ChyListItem {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$Text
    )

    @{
        assetId = $AssetId 
        isPlugin = $true 
        type = "chylistitem"
        id = $Id

        text = $Text
    }
}

