<?php

namespace App\Filament\Resources;

use App\Filament\Resources\UniversitiesResource\Pages;
use App\Filament\Resources\UniversitiesResource\RelationManagers;
use App\Models\Universities;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Models\Countries;

class UniversitiesResource extends Resource
{
    protected static ?string $model = Universities::class;

    protected static ?string $navigationIcon = 'heroicon-o-building-office-2';

 public static function form(Form $form): Form
{
    return $form
        ->schema([
            Forms\Components\Grid::make()
                ->columns(12)
                ->schema([

                    // LEFT MAIN AREA (lg: 6 of 12)
                    Forms\Components\Section::make()
                        ->columnSpan([
                            'default' => 12,
                            'lg' => 6,
                        ])
                        ->schema([

                         Forms\Components\FileUpload::make('image')
                                ->image()
                                ->required()
                                ->disk('bunny') 
                                ->directory('university'),

                            Forms\Components\TextInput::make('name')
                                ->required()
                                ->maxLength(255),

                          Forms\Components\Select::make('country_id')
                                ->required()
                                ->label('Country')
                                ->options(Countries::all()->pluck('name', 'id'))
                                ->searchable(),

                        ]),

                    // RIGHT SIDEBAR (lg: 6 of 12)
                    Forms\Components\Section::make()
                        ->aside()
                        ->columnSpan([
                            'default' => 12,
                            'lg' => 6,
                        ])
                        ->schema([
                          Forms\Components\FileUpload::make('pdf')
                                ->acceptedFileTypes(['application/pdf'])
                                ->required()
                                ->disk('bunny') 
                                ->directory('pdf'),
                             Forms\Components\Select::make('status')
                            ->required()
                            ->options([
                                'active' => 'Active',
                                'inactive' => 'Inactive',
                            ])
                            ->default('active')
                            ->placeholder('Select status')
                            ->searchable()
                            ->native(false),
                        ]),
                ])
        ]);
}


    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image')
                ->getStateUsing(fn ($record): ?string => $record->image ? 'https://nhglobaleducation.b-cdn.net/' . $record->image : null),
                Tables\Columns\TextColumn::make('name')
                    ->searchable(),
               Tables\Columns\TextColumn::make('status')
                    ->searchable()
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'active' => 'success',
                        'inactive' => 'danger',
                        'draft' => 'warning',
                        default => 'secondary',
                    }),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
                Tables\Actions\ViewAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListUniversities::route('/'),
            'create' => Pages\CreateUniversities::route('/create'),
            'edit' => Pages\EditUniversities::route('/{record}/edit'),
        ];
    }
}
