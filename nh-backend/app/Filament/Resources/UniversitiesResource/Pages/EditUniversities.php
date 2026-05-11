<?php

namespace App\Filament\Resources\UniversitiesResource\Pages;

use App\Filament\Resources\UniversitiesResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditUniversities extends EditRecord
{
    protected static string $resource = UniversitiesResource::class;

    protected function getHeaderActions(): array
    {
        return [
            //Actions\DeleteAction::make(),
        ];
    }
}
